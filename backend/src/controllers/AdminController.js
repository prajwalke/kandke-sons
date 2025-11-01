const jwt = require("jsonwebtoken");

exports.login = (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "admin123") {
    const token = jwt.sign({ username }, "your-secret-key", {
      expiresIn: "1h",
    });
    return res.json({ message: "Login successful", token });
  } else {
    return res.status(401).json({ message: "Invalid credentials" });
  }
};
