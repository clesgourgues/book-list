import React from 'react';
import { Section, Heading, Notification } from 'grommet';
import Spinning from 'grommet/components/icons/Spinning';
import { Query } from 'react-apollo';
import { getBooksByUserQuery } from '../graphql';
import BookList from './BookList';


const Collection = ({ user }) => {
  const id = user.id
  return (
    <Query query={getBooksByUserQuery} variables={{ id }} fetchPolicy='cache-and-network'>
      {({ loading, error, data }) => {
        if (loading) return <Spinning />
        if (error) return <Notification
        message='Something went wrong, please retry'
        status='critical' />
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