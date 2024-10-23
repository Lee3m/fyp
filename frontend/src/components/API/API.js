import API_URL from "./apiURL";

// Define the API object
const API = {};

// Define the callFetch function
const callFetch = async (endpoint, method, dataObj) => {
  let requestObject = { method: method };

  // BUILD REQUEST OBJECT
  if (dataObj) {
    requestObject = {
      ...requestObject,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataObj),
    };
  }

  try {
    const endpointAddress = API_URL + endpoint;
    const response = await fetch(endpointAddress, requestObject);
    const result = await response.json();

    return response.status >= 200 && response.status < 300
      ? { isSuccess: true, message: "Success", result }
      : { isSuccess: false, message: result.message };
  } catch (error) {
    return {
      isSuccess: false,
      message: `Failed to call API: ${error.message}`,
    };
  }
};

// Set API methods to use callFetch
API.get = (endpoint) => callFetch(endpoint, "GET", null);
API.post = (endpoint, dataObj) => callFetch(endpoint, "POST", dataObj);
API.put = (endpoint, dataObj) => callFetch(endpoint, "PUT", dataObj);
API.delete = (endpoint) => callFetch(endpoint, "DELETE", null);

export default API;
