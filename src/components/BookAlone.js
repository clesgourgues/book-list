import React from 'react'
import { Mutation } from 'react-apollo';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { Section, Heading, Image, Button, Paragraph, Timestamp, Anchor, Box } from 'grommet';
import FormPrevious from 'grommet/components/icons/base/FormPrevious';
import Favorite from 'grommet/components/icons/base/Favorite';
import { postMutation, voteMutation } from '../graphql';
import { AUTH_TOKEN } from '../constants';




const BookAlone = props => {
  const { id, author, title, description, textSnippet, publishedDate, image, isbn, publisher, pageCount } = props.book
  const publishInfo = publisher ? <strong>Published by {publisher} on <Timestamp value={publishedDate}
    fields='date' /></strong> : null
  const pagesInfo = pageCount ? <strong> - {pageCount} pages</strong> : null
  const authToken = localStorage.getItem(AUTH_TOKEN)
  return (
    <Section pad='medium'
      justify='center'
      align='center'>
      <Box pad='small' alignSelf='start'>
        <Anchor align='center' onClick={props.handleBack} icon={<FormPrevious colorIndex='light-1' size="small" />}
          label='Back to results'
        />
      </Box>
      <div className='bookalone'>
        <Box direction='row' pad='medium' align='start'>
          <Image src={image}
            alt={`${props.book.title} - ${author}`}
            full={false} size='small' />
          <Box pad='small'>
            <Heading strong tag='h3' margin='none'>
              {title}
            </Heading>
            <div className='author'>
              {author}
            </div>
            <Paragraph margin='medium'>
              {publishInfo} {pagesInfo}
            </Paragraph>
          </Box>
        </Box>

        {authToken ?
          (<Box pad='small'
            justify='center'
            align='start'>
            <Mutation
              mutation={postMutation} variables={{ author, title, description, textSnippet, publishedDate, image, isbn, publisher, pageCount }}
              /* update={(cache, { data: { Book } }) => {
               const { books } = cache.readQuery({ query: ROOT_QUERY.feed });
               cache.writeQuery({
                 query: GET_TODOS.feed,
                 data: { todos: todos.concat([Book]) }
               });
             }}  */
              onCompleted={() => props.history.push('/collection')}>
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
            </Mutation>
            <Mutation mutation={voteMutation}>
              {voteMutation => (
                <Box pad='small' onClick={voteMutation({ variables: { bookId: id } })}>
                  <Anchor align='center' icon={<Favorite colorIndex='light-1' size="small" />}
                    label='Vote for this book'
                  />
                </Box>
              )}
            </Mutation></Box>)
          : (
            <Box pad='small'
              justify='center'
              align='start'>
              <Paragraph margin='medium'>
                <Link to="/login">
                  <Anchor tag='span' align='start'
                    label='Login' >Login</Anchor>
                </Link> to save this book to your collection !
              </Paragraph>
            </Box>)}

        <Box pad='small'
          justify='center'
          align='start'>
          <Paragraph>
            {description}
          </Paragraph>
        </Box>
      </div>
    </Section>

  )
}

export default withRouter(BookAlone);