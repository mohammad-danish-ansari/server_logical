import User from "../../../../model/userModel.js";
import bcrypt from "bcrypt";

// Register user api
export const register = async (req, res) => {
  try {
    const { username, phone, email, password } = req.body;

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      phone,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({ message: "User registered successfully" ,user:user});
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Login user api
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    // Check password
    const isMatch = await user.validPassword(password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = user.genToken();

    return res.status(200).json({
      message: "Login successful",
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        phone: user.phone,
      },
      token,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
