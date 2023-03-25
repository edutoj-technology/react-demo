import axios from "axios";

const apiMiddleware = (store) => (next) => (action) => {
  if (!(action.meta && action.meta.api)) {
    next(action);
    return Promise.resolve(
      `[API Middleware:] - action.type`,
      action.type,
      "Skip api call as meta prop is not present"
    );
  }

  let { url, method, data } = action.meta.api;

  const promise = new Promise((resolve, reject) => {
    axios({
      method,
      url,
      data,
      //   timeout: timeout || 0,
      //   headers: customHeaders,
      //   responseType: responseType || "",
    })
      .then((response) => {
        action.response = response.data;
        action.responseObject = response;

        next(action);

        return resolve(response.data);
      })
      .catch((error) => {
        next(action);
        return reject(error);
      });
  });

  return promise;
};

export default apiMiddleware;
