import axios from "axios";

export default {
  // Gets all gratitude entries
  getGratitude: function() {
    return axios.get("http://localhost:3001/api/gratitude");
  },
  // Gets the gratitude entries with the given id
  getGratitude: function(id) {
    return axios.get("http://localhost:3001/api/gratitude"+ id);
  },
  // Deletes the gratitude entries with the given id
  deleteGratitude: function(id) {
    return axios.delete("http://localhost:3001/api/gratitude" + id);
  },
  // Saves a gratitude entries to the database
  saveGratitude: function(gratitudeData) {
    return axios.post("http://localhost:3001/api/gratitude", gratitudeData);
  }
};