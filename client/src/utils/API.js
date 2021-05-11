
import axios from "axios";

export default {
  // Saves a user to the database
  saveUser: function (userData) {
    return axios.post("/api/users", userData).then(result => result.data);
  },

  
  // Get the saved a user from the database
  savedBooks: function () {
    return axios.get("/api/users").then(result => result.data);
  }
};
