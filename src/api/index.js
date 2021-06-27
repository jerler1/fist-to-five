import axios from "axios";

const BASEURL = "http://localhost:4141";
// switch it to 4141 when we use the edge service

const api = {
  createStudent(data) {
    return axios.post(BASEURL + "/student", data);
  },

  createInstructor(data) {
    return axios.post(BASEURL + "/instructor", data);
  },
  // Activities below
  getActivities: function () {
    return axios.get(BASEURL + "/activity");
  },
  createActivity: function (data) {
    return axios.post(BASEURL + "/activity", data);
  },
  getActivityById: function (id) {
    return axios.get(BASEURL + `/activity/${id}`);
  },
  updateActivity: function (id) {
    return axios.put(BASEURL + `/activity/${id}`);
  },
  deleteActivity: function(id) {
    return axios.delete(BASEURL+`/activity/${id}`);
  },
    // Ratings below
    getRatings: function () {
      return axios.get(BASEURL + "/rating");
    },
    createRating: function (data) {
      return axios.post(BASEURL + "/rating", data);
    },
    getRatingById: function (id) {
      return axios.get(BASEURL + `/rating/${id}`);
    },
    updateRating: function (id) {
      return axios.put(BASEURL + `/rating/${id}`);
    },
    deleteRating: function(id) {
      return axios.delete(BASEURL+`/rating/${id}`);
    },
};
export default api;
