import axios from "axios";

export default () => {
  return axios.create({
    // TODO: add configurable URL instead of a hard-coded one
    baseURL: "http://localhost:8081"
  });
};
