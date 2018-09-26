import React from 'react';
import { Section, Heading } from 'grommet';
import { Query, graphql } from 'react-apollo';
import gql from 'graphql-tag';
import BookList from './BookList';
import { AUTH_TOKEN } from '../constants'


const BOOK_BY_USER_QUERY = gql`
query booksByUser($id: ID!){
    booksByUser(id: $id) {
      name
      books{
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
        }}
  }
  }
`

const LOGGED_IN_USER_QUERY = gql`
      query LoggedInUserQuery {
      me {
          id
          name
        }
    }
`

const CollectionSection = props => {
  //const data = client.readQuery({ BOOK_BY_USER_QUERY });
  const authToken = localStorage.getItem(AUTH_TOKEN);
  const { name, id } = props.loggedInUserQuery ? props.loggedInUserQuery.me : null
  let heading = "";
  if(authToken) {
    heading = `${name}'s books collection`
  } else {
    heading = 'Please login to see your collection'
  }

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
      {authToken &&
      <Query query={BOOK_BY_USER_QUERY} variables={{ id }}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>
          const booksToRender = data.booksByUser.books
          return (
            <BookList books={booksToRender} />
          )
        }}
      </Query>
      }
    </Section>
  )
};

export default graphql(LOGGED_IN_USER_QUERY, {
  name: 'loggedInUserQuery',
})(CollectionSection)