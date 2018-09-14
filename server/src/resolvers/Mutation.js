const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('../utils')

async function signup(parent, args, context, info) {
  // 1
  const password = await bcrypt.hash(args.password, 10)
  // 2
  const user = await context.db.mutation.createUser({
    data: { ...args, password },
  }, `{ id }`)

  // 3
  const token = jwt.sign({ userId: user.id }, APP_SECRET)

  // 4
  return {
    token,
    user,
  }
}

async function login(parent, args, context, info) {
  // 1
  const user = await context.db.query.user({ where: { email: args.email } }, ` { id password } `)
  if (!user) {
    throw new Error('No such user found')
  }

  // 2
  const valid = await bcrypt.compare(args.password, user.password)
  if (!valid) {
    throw new Error('Invalid password')
  }

  const token = jwt.sign({ userId: user.id }, APP_SECRET)

  // 3
  return {
    token,
    user,
  }
}

function post(parent, args, context, info) {
  const userId = getUserId(context)
  return context.db.mutation.createBook(
    {
      data: {
        title: args.title,
        author: args.author,
        image: args.image,
        description: args.description,
        isbn: args.isbn,
        publishedDate: args.publishedDate,
        postedBy: { connect: { id: userId } },
      },
    },
    info,
  )
}

async function vote(parent, args, context, info) {
  // 1
  const userId = getUserId(context)

  // 2
  const bookExists = await context.db.exists.Vote({
    user: { id: userId },
    book: { id: args.bookId },
  })
  if (linkExists) {
    throw new Error(`Already voted for book: ${args.bookId}`)
  }

  // 3
  return context.db.mutation.createVote(
    {
      data: {
        user: { connect: { id: userId } },
        book: { connect: { id: args.bookId } },
      },
    },
    info,
  )
}

module.exports = {
    signup,
    login,
    post,
    vote
}