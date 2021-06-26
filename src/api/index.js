import axios from "axios";

const api = {
  createInstructor(data) {
    return axios
      .post("localhost:4141/instructor", data)
      .then((data) => console.log(data));
  },
  createStudent(data) {
    return axios
    .post("localhost:4141/student", data)
  },

  // Activities below
  createActivity(data) {
    return axios
    .post("localhost:4141/instructor", data)
  },
  getAllActivities(data) {
    return axios
    .get("localhost:4141/instructor", data)
  },

};

export default api;
