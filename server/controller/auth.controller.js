import user from "../models/user.model.js";
import bcrypt from "bcryptjs";
import errorHandler from "../utills/error.js";
import jwt from "jsonwebtoken"
const signUp = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password || username === "" || email === "" || password === "") {
      next(errorHandler(400, "All Fields Are Required"))
    }
    const hashedPassword = await bcrypt.hashSync(password, 10);
    const newUser = new user({
      username: username,
      email: email,
      password: hashedPassword
    });
    newUser.save();
    res.json("SignUp SuccessFull")
  }
  catch (error) {
    next(error);
  }

}

const signin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password || email === '' || password === '') {
    next(errorHandler(400, 'All fields are required'));
  }

  try {
    const validUser = await user.findOne({ email });
    if (!validUser) {
      return next(errorHandler(404, 'User not found'));
    }
    const validPassword = bcrypt.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(400, 'Invalid password'));
    }
    const token = jwt.sign(
      { id: validUser._id },
      process.env.JWT_SECRET
    );

    const { password: pass, ...rest } = validUser._doc;

    res.status(200)
      .cookie('access_token', token, {
        httpOnly: true,
      })
      .json(rest);
  } catch (error) {
    next(error);
  }
};

export { signin, signUp }