// Boilerplate code for handling errors from the API.  If the error response
// contains JSON then we return a rejected promise containing the decoded
// JSON.  If the error doesn't contain JSON then we return a rejected promise
// containing the status text.  If there is no error then we continue with
// the promise chain.
export const normalizeResponseErrors = response => {
  if (!response.ok) {
    if (
      response.headers.has("content-type") &&
      response.headers.get("content-type").startsWith("application/json")
    ) {
      // It's a nice JSON error returned by us, so decode it
      return response.json().then(err => Promise.reject(err));
    }
    // It's a less informative error returned by express
    return Promise.reject({
      code: response.status,
      message: response.statusText
    });
  }
  return response;
};
