import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Section, Heading } from 'grommet';
import BookList from './BookList'

const FEED_QUERY = gql`
  {
    feed {
      id
      title
      author
      description
      image
      postedBy {
          id
          name
        }
        votes {
          id
          user {
            id
          }
        }
    }
  }
`

class BookQuery extends Component {
  render() {
    return (
      <Section pad='large'
        justify='center'
        align='center'
      >
        <Heading tag='h3'
          strong={false}
          truncate={false}
          align='start'
          margin='small'>
          Recently added
        </Heading>
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
      </Section >
    )
  }
}

export default BookQuery