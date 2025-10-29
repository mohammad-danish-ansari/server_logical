export function outputData(rows) {
  return {
    rows: rows[0]?.data || [],
    count: rows[0]?.count?.[0]?.total || 0,
  };
}

export const searchByKey = async (searchKeys, search) => {
  let match = {};
  if (search && searchKeys.length) {
    match["$or"] = [];
    for (let item of searchKeys) {
      match["$or"].push({ [item]: { $regex: `${search}`, $options: "i" } });
    }
  }
  return match;
};