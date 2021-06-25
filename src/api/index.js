import axios from "axios";

const api = {
  createInstructor(data) {
    return axios
      .post("localhost:4141/instructor", data)
      .then((data) => console.log(data));
  },
};

export default api;
