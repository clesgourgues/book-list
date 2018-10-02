const { getUserId } = require('../utils')

function feed(parent, args, context, info) {
  const where = args.filter
  ? {
      OR: [
        { url_contains: args.filter },
        { description_contains: args.filter },
      ],
    }
  : {}
  return context.db.query.books({where, skip: args.skip, first: args.first, orderBy: args.orderBy}, info)
}

function booksByUser(parent, args, context, info) {
  return context.db.query.user({ where: { id: args.id }}, info)
}

function book(parent, args, context, info) {
  return context.db.query.book({ where: { id: args.id } }, info)
}

function me(parent, args, context, info) {
  const id = getUserId(context)
  return context.db.query.user({ where: { id } }, info)
}

module.exports = { feed, book, me, booksByUser }
