import axios from "axios";
import { toast } from "react-toastify";

axios.interceptors.request.use((req) => {
  debugger;
  const reqClone = { ...req };
  if (!req.headers["Content-Type"]) {
    reqClone.headers = {
      ...reqClone.headers,
      "Content-Type": "application/json",
    };
  }
  return reqClone;
});

axios.interceptors.response.use(null, (error) => {
  const expectedErrors =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedErrors) {
    console.log("from interceptors..");
    debugger;
    toast.info("in interceptos error");
    toast.error(error.message);
  }

  return Promise.reject(error);
});

// eslint-disable-next-line import/no-anonymous-default-export
const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
};

export default http;
