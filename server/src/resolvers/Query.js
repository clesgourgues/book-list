const axios = require("axios");
const { getSearchResult } = require('../utils')


const baseURL = 'https://www.googleapis.com/books/v1/volumes'
const API_KEY = 'AIzaSyAEUvnODn7rbMRzl6GbGOBdY6dKQs1kxPY'

function feed(parent, args, context, info) {
  console.log(context.db.query.books({}, info))
  return context.db.query.books({}, info)
}

function searchBooks(parent, args, context) {
 axios.get(`${baseURL}?q=${args}&maxResults=20&orderBy=newest&key=${API_KEY}`)
    .then(res => {
      console.log(res.data)
      const booklist = res.data;
      return getSearchResult(booklist)
    })
}

module.exports = { feed, searchBooks }
