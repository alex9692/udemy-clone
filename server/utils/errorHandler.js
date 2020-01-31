module.exports = (message, status, statusCode) => {
  const error = new Error(message);
  error.status = status;
  error.statusCode = statusCode;
  return error;
};
