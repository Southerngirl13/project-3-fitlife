import axios from "axios";

export default {
  // Gets all books
  getAssessment: function() {
    return axios.get("/api/assessment");
  },
  // Gets the book with the given id
  // getAssessment: function(id) {
  //   return axios.get("/api/assessment/" + id);
  // },
  // Deletes the book with the given id
  deleteAssessment: function(id) {
    return axios.delete("/api/assessment/" + id);
  },
  // Saves a book to the database
  saveAssessment: function(assessmentData) {
    return axios.post("/api/assessment", assessmentData);
  }

  // books: {
  //   getBooks() {}
  //   deleteBooks() {}
  // } 
};