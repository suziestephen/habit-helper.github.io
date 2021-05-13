import axios from "axios";
const site = "http://localhost:3001";

export default {

  getEntries: function() {
    return axios.get("http://localhost:3001/api/entries");
  },

  // // Gets all gratitude entries
  getGratitude: function() {
    return axios.get(site + "/api/entries/gratitude");
  },

  // // Gets the gratitude entries with the given id
  // getGratitude: function(id) {
  //   return axios.get(site + "/api/entries/gratitude/"+ id);
  // },
  // Deletes the gratitude entries with the given id
  deleteGratitude: function(id) {
    return axios.delete(site + "/api/entries/gratitude" + id);
  },
  // Saves a gratitude entries to the database
  saveGratitude: function(gratitudeData) {
    return axios.post(site + "/api/entries/gratitude", gratitudeData);
  },


  // Gets all exercise entries
  getExercise: function() {
    return axios.get(site + "/api/entries/exercise");
  },
  // Gets the exercise entries with the given id
  getExercise: function(id) {
    return axios.get(site + "/api/entries/exercise"+ id);
  },
  // Deletes the exercise entries with the given id
  deleteExercise: function(id) {
    return axios.delete(site + "/api/entries/exercise" + id);
  },
  // Saves a exercise entries to the database
  saveExercise: function(exerciseData) {
    return axios.post(site + "/api/entries/exercise", exerciseData);
  },

    // Gets all reading entries
    getReading: function() {
      return axios.get(site + "/api/entries/reading");
    },
    // Gets the reading entries with the given id
    getReading: function(id) {
      return axios.get(site + "/api/entries/reading"+ id);
    },
    // Deletes the reading entries with the given id
    deleteReading: function(id) {
      return axios.delete(site + "/api/entries/reading" + id);
    },
    // Saves a reading entries to the database
    saveReading: function(readingData) {
      return axios.post(site + "/api/entries/reading", readingData);
    },


};