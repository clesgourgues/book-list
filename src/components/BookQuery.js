import React, { Component } from 'react'
import { Query } from 'react-apollo'
import { getBookListQuery } from '../graphql';
import { Section, Heading } from 'grommet';
import BookList from './BookList'

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
        <Query query={getBookListQuery}>
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