import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import BookList from './BookList'

const FEED_QUERY = gql`
  {
    feed {
      id
      title
      author
      description
      image
    }
  }
`

class BookQuery extends Component {
  render() {
    return (
      <Query query={FEED_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>

          const booksToRender = data.feed
          return (
            <BookList books={booksToRender} />
          )
        }}
      </Query>
    )
  }
}

export default BookQuery