import gql from 'graphql-tag';

export const postMutation = gql`
mutation PostMutation($title: String!, $author: String!, $textSnippet: String, $description: String!, $publishedDate: String, $isbn: String!, $image: String, $publisher: String, $pageCount: String) {
  post(description: $description, title: $title, author:$author, textSnippet: $textSnippet, publishedDate: $publishedDate, isbn: $isbn, image: $image, publisher: $publisher, pageCount: $pageCount ) {
    id
    createdAt
    title
    author
    textSnippet
    description
    publishedDate
    isbn
    image
    publisher
    pageCount
    postedBy {
        id
        name
      }
  }
}
`