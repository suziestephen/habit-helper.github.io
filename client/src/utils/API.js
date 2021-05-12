import axios from "axios";
const site = "http://localhost:3001";

export default {
  // Gets all gratitude entries
  getGratitude: function() {
    return axios.get(site + "/api/entries/gratitude");
  },
  // Gets the gratitude entries with the given id
  getGratitude: function(id) {
    return axios.get(site + "/api/entries/gratitude"+ id);
  },
  // Deletes the gratitude entries with the given id
  deleteGratitude: function(id) {
    return axios.delete(site + "/api/entries/gratitude" + id);
  },
  // Saves a gratitude entries to the database
  saveGratitude: function(gratitudeData) {
    return axios.post(site + "/api/entries/gratitude", gratitudeData);
  },


  // Gets all gratitude entries
  getExercise: function() {
    return axios.get(site + "/api/entries/exercise");
  },
  // Gets the gratitude entries with the given id
  getExercise: function(id) {
    return axios.get(site + "/api/entries/exercise"+ id);
  },
  // Deletes the gratitude entries with the given id
  deleteExercise: function(id) {
    return axios.delete(site + "/api/entries/exercise" + id);
  },
  // Saves a gratitude entries to the database
  saveExercise: function(exerciseData) {
    return axios.post(site + "/api/entries/exercise", exerciseData);
  }


};