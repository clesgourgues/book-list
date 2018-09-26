const axios = require("axios");
const { getSearchResult } = require('../utils')
const { getUserId } = require('../utils')

const baseURL = 'https://www.googleapis.com/books/v1/volumes'
const API_KEY = 'AIzaSyAEUvnODn7rbMRzl6GbGOBdY6dKQs1kxPY'

function feed(parent, args, context, info) {
  return context.db.query.books({}, info)
}

async function booksByUser(parent, args, context, info) {
  return await context.db.query.user({ where: { id: args.id } }, info)
}

async function book(parent, args, context, info) {
  return await context.db.query.book({ where: { id: args.id } }, info)
}

async function me(parent, args, context, info) {
  const id = getUserId(context)
  return await context.db.query.user({ where: { id } }, info)
}

/* async function booksByUser(parent, args, context, info) {
  const where = postedBy
  return await context.db.query.books({ where: { id: args.id } }, info)
} */

function searchBooks(parent, args, context) {
  axios.get(`${baseURL}?q=${args}&maxResults=20&orderBy=newest&key=${API_KEY}`)
    .then(res => {
      console.log(res.data)
      const booklist = res.data;
      return getSearchResult(booklist)
    })
}

module.exports = { feed, book, me, booksByUser, searchBooks }
