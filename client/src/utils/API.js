import axios from "axios";

export default {
  // Gets all gratitude entries
  getGratitude: function() {
    return axios.get("/api/gratitude");
  },
  // Gets the gratitude entries with the given id
  getGratitude: function(id) {
    return axios.get("/api/gratitude/" + id);
  },
  // Deletes the gratitude entries with the given id
  deleteGratitude: function(id) {
    return axios.delete("/api/gratitude/" + id);
  },
  // Saves a gratitude entries to the database
  saveGratitude: function(gratitudeData) {
    return axios.post("/api/gratitude", gratitudeData);
  }
};