const handleHistory = (response) => {
  let status = response.statusCode;
  let method = response.req.method.toUpperCase();
  let url = response.req.url;

  return [method, status, url];
};

const handleError = (err) => {
  console.log(err);
  let status = err.status;
};

module.exports = { handleHistory, handleError };
