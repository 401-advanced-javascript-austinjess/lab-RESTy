const handleHistory = (response) => {
  let status = response.status;
  let method = response.config.method.toUpperCase();
  let url = response.config.url;

  return [method, status, url];
};

const handleError = (err) => {
  console.log(err);
};

module.exports = { handleHistory, handleError };
