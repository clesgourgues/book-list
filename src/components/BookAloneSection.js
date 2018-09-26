import React from 'react';
import BookAlone from './BookAlone';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';


const BOOK_QUERY = gql`
  query book($id: ID!){
    book(id: $id) {
      id
      createdAt
      title
      author
      textSnippet
      description
      publishedDate
      publisher
      pageCount
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

const BookAloneSection = props => {
  const id = props.match.params.id
    return (
    <Query query={BOOK_QUERY} variables={{ id }}>
      {({ loading, error, data }) => {
        if (loading) return <div>Fetching</div>
        if (error) return <div>Error</div>
        const bookToRender = data.book
        console.log(data.book)
        return (
          <BookAlone book={bookToRender} />
        )
      }}
    </Query>)
  }


export default BookAloneSection