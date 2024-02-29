import axios from "axios";
export default axios.create({
  // baseURL: `http://${process.env.REACT_APP_Host}:${process.env.REACT_APP_Port}`,
  baseURL: `http://localhost:8080/api/v1`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});