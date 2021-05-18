import axios from "axios";
const site =  window.location.hostname.includes('localhost') ? "http://localhost:3000" : "";

const axiosInstance = axios.create({
  baseURL: window.location.host.includes('localhost') ? 'http://localhost:3001' : '',
  withCredentials: true
})


export default {

//GRATITUDE
  // // Gets all gratitude entries
  getGratitude: function() {
    return axios.get(site + "/api/entries/gratitude");
  },

  // Saves a gratitude entries to the database
  saveGratitude: function(gratitudeData) {
    return axios.post(site + "/api/entries/gratitude", gratitudeData);
  },

//EXERCISE
  // Gets all exercise entries
  getExercise: function() {
    return axios.get(site + "/api/entries/exercise");
  },

  // Saves a exercise entries to the database
  saveExercise: function(exerciseData) {
    return axios.post(site + "/api/entries/exercise", exerciseData);
  },

  //READING
    // Gets all reading entries
    getReading: function() {
      return axios.get(site + "/api/entries/reading");
    },

    // Saves a reading entries to the database
    saveReading: function(readingData) {
      return axios.post(site + "/api/entries/reading", readingData);
    },

  //USER
    userSignup: function (userData) {
      return axiosInstance({
        method: 'post',
        url: "/api/user/signup",
        data: userData
      })
    },
  
  

    userLogout: function() {
      return axiosInstance({
        method: 'get',
        url: "/api/user/logout",
      })
    },

  

    userLogin: function (userData) {
      return axiosInstance({
        method: 'post',
        url: "/api/user/login",
        data: userData
      })
    },


    // Check if user is logged in
    userLoggedIn: function() {
      return axiosInstance({
        method: 'get',
        url: "/api/user/logged-in",
      })
    },


    

};


    //  // Gets the reading entries with the given id
    //  updateReading: function(id) {
    //   return axios.put(site + "/api/entries/reading/"+ id);
    // },

    // // Deletes the reading entries with the given id
    // deleteReading: function(id) {
    //   return axios.delete(site + "/api/entries/reading/" + id);
    // },