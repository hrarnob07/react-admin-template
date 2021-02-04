/* eslint no-restricted-globals:0 */
import Axios from "axios";

const Client = Axios.create({

  // dev :5443
  // live : 7443

  baseURL: "https://jsonplaceholder.typicode.com/",
  headers: {
    common: {
      "Content-Type": "application/json",

    }
  }
});


Client.interceptors.response.use(response => {
  return response;
}, error => {
  return error;
});

export default Client;
