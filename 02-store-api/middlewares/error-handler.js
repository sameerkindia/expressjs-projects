const {CustomApiError} = require('./custom-error')

const errorHandlerMiddleware = (err, req, res, next) => {
  if(err instanceof CustomApiError){
    return res.status(err.statusCode).json(err.message)
  }
  return res.status(500).json({ msg: "Something went wrong, please try again" });
};

module.exports = errorHandlerMiddleware;
