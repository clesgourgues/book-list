const jwt = require('jsonwebtoken')
const APP_SECRET = 'GraphQL-is-aw3some'

function getUserId(context) {
  const Authorization = context.request.get('Authorization')
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const { userId } = jwt.verify(token, APP_SECRET)
    return userId
  }

  throw new Error('Not authenticated')
}



module.exports = {
  APP_SECRET,
  getUserId,
}

/* type SearchBookResult {
  id: {type: GraphQLString},
  character: {type: GraphQLString},
  name: {type: GraphQLString},
  profile_path: {type: GraphQLString},
  order: {type: GraphQLString}
} */

/* type ApiBooksResponse {
  kind: String!
  totalItems: String!
  items: [ApiBooks]
}

type ApiBooks {
  kind: String!
  id: String!
  etag: String!
  selfLink: String!
  volumeInfo: [Object],
  saleInfo: [Object],
  accessInfo: [Object],
  searchInfo: [Object]
} */
