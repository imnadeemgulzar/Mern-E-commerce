import JWT from "jsonwebtoken";

export const requireSignIn = async (req, res, next) => {
  try {
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    next();
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "error in middleware",
      error,
    });
  }
};
console.log("client");
