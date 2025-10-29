export const paginateSequelize = async (
  Model,
  {
    search = "",
    searchKeys = [],
    page = 1,
    limit = 4,
    column = "createdAt",
    direction = "DESC",
    where = {},
  }
) => {
  const pageNum = Number(page);
  const limitNum = Number(limit);

  if (search && searchKeys.length) {
    where[Op.or] = searchKeys.map((key) => ({
      [key]: { [Op.like]: `%${search}%` },
    }));
  }

  const offset = (pageNum - 1) * limitNum;

  const { rows, count } = await Model.findAndCountAll({
    where,
    limit: limitNum, 
    offset,
    order: [[column, direction]],
  });

  return {
    rows,
    pagination: {
      total: count,
      page: pageNum,
      limit: limitNum,
      totalPages: Math.ceil(count / limitNum),
    },
  };
};
