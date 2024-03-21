import axios, { Method } from "axios"; // Import Axios for making HTTP requests

const endpoint = "http://127.0.0.1:8083/";

type Headers = Record<string, string>;
let authenticationHeaders: Headers = {};

export function setAuthenticationHeaders(value: Headers) {
  authenticationHeaders = value;
}

export const apiRequest = async <Data,>(method: Method, query: string, body?: Record<string, any>, queryParam?: Record<string, any>, customHeaders?: Headers): Promise<Data> => {
  // Constructing query parameters if provided
  try {
    // Making the request using Axios
    const response = await axios({
      method: method,
      url: endpoint + query,
      data: body,
      headers: {
        ...authenticationHeaders,
        ...customHeaders,
      },
      params: queryParam,
    });

    // Return the data or throw an error if there's one
    if (response.data.errors) {
      throw new Error(JSON.stringify(response.data.errors));
    }

    return response.data as Data;
  } catch (error: any) {
    throw new Error(`HTTP error: ${error.message}`);
  }
};
