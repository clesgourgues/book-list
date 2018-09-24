import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { withApollo } from 'react-apollo';
import { withRouter } from 'react-router';
import { Article, Section, Headline, Heading, Image, Button, Paragraph, Timestamp, Anchor } from 'grommet';
import { LinkPrevious } from 'grommet-icons';
import { Link } from 'react-router-dom'
import { AUTH_TOKEN } from '../constants'


const POST_MUTATION = gql`
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
    }
  }
`

const BookAlone = props => {
  const { author, title, description, textSnippet, publishedDate, image, isbn, publisher, pageCount } = props.book
  const publishInfo = publisher ? <strong>Published by {publisher} on <Timestamp value={publishedDate}
    fields='date' /></strong> : null
  const pagesInfo = pageCount ? <strong> - {pageCount} pages</strong> : null
  const authToken = localStorage.getItem(AUTH_TOKEN)
  return (
    <Article>
      <Section pad='medium'
        justify='center'
        align='start'>
        <Anchor onClick={props.handleBack} icon={<LinkPrevious />}
          label='Back to results'
        />
        <Image src={image}
          alt={`${props.book.title} - ${author}`}
          full={false} size='small' />
        <Headline strong size='small' margin='none'>
          {title}
        </Headline>
        <Heading size='small' margin='medium'>
          {author}
        </Heading>
        <Paragraph margin='medium'>
          {publishInfo} {pagesInfo}
        </Paragraph>
      </Section>
      <Section pad='medium'
        justify='center'
        align='start'>
        {authToken ?
          (<Mutation mutation={POST_MUTATION} variables={{ author, title, description, textSnippet, publishedDate, image, isbn, publisher, pageCount }}
            onCompleted={() => props.history.push('/')}>
            {postMutation => (
              <Button
                label='Save to my collection'
                onClick={postMutation}
                primary={false}
                secondary={false}
                accent={false}
                plain={false}
                type='submit' />
            )}
          </Mutation>) : (<Paragraph margin='medium'>
            <Link to="/login">
              <Anchor tag='span' align='start'
                label='Login' >Login</Anchor>
            </Link> to save this book to your collection !
        </Paragraph>)}
      </Section>
      <Section pad='medium'
        justify='center'
        align='start'>
        <Paragraph>
          {description}
        </Paragraph>
      </Section>
    </Article>
  )
}

export default withApollo(withRouter(BookAlone));