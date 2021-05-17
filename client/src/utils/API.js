import axios from "axios";
const site = "http://localhost:3001";

const axiosInstance = axios.create({
  baseURL: window.location.host.includes('localhost') ? 'http://localhost:3001' : '',
  withCredentials: true
})


export default {


  // // Gets all gratitude entries
  getGratitude: function() {
    return axios.get(site + "/api/entries/gratitude");
  },

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

  deleteExercise: function(id) {
    return axios.delete(site + "/api/entries/exercise/" + id);
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
     updateReading: function(id) {
      return axios.put(site + "/api/entries/reading/"+ id);
    },

    // Deletes the reading entries with the given id
    deleteReading: function(id) {
      return axios.delete(site + "/api/entries/reading/" + id);
    },
    // Saves a reading entries to the database
    saveReading: function(readingData) {
      return axios.post(site + "/api/entries/reading", readingData);
    },



    //LOGIN AND SIGNUP
    saveSignup: function(signupData) {
    return axios.post(site + "/api/user/signup", signupData);
     },

    login: function(email, password) {
    return axios.post(site + "/api/user/login", { username: email, password });
    },

    getUser: function() {
      return axios.get("/api/user/login");
    },

    getUserId: function() {
      return axios.get("/api/user/user-id");
    },

    logout: function() {
      console.log('logout');
      return axios.post('/api/user/logout');
  },

    // Check if user is logged in
    userLoggedIn: function() {
      return axiosInstance({
        method: 'get',
        url: "/api/user/logged-in",
      })
    },


    

};