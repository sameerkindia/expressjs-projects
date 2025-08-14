const jwt = require("jsonwebtoken");
const { BadRequestError } = require("../errors");

const login = async (req, res) => {
  const { username, password } = req.body;
  // console.log(username, password)

  if (!username || !password) {
    throw new BadRequestError("Please provide email and password");
  }

  const id = new Date().getDate();

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  // console.log(token , "this is token")

  res.status(200).json({ msg: "User created", token });
};

const dashboard = async (req, res) => {
//   console.log(req.user);

  const luckyNumber = Math.floor(Math.random() * 100);

  res
    .status(200)
    .json({ msg: `Hello, ${req.user.username}`, secret: `${luckyNumber}` });
};

module.exports = { login, dashboard };
