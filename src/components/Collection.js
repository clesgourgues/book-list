import React from 'react';
import { Section, Heading } from 'grommet';
import { Query } from 'react-apollo';
import { getBooksByUserQuery } from '../graphql';
import BookList from './BookList';


const Collection = ({ user }) => {
  const id = user.id
  return (
    <Query query={getBooksByUserQuery} variables={{ id }}>
      {({ loading, error, data }) => {
        if (loading) return <div>Fetching</div>
        if (error) return <div>Error</div>
        const booksToRender = data.booksByUser.books
        const heading = user ? `${user.name} books collection` : 'Please login to see your collection'
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
              {heading}
            </Heading>
            <BookList books={booksToRender} />
          </Section>
        )
      }}
    </Query>
  )
}

export default Collection;