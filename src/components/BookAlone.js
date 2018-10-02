import React from 'react'
import { Mutation } from 'react-apollo';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { Section, Heading, Image, Button, Paragraph, Timestamp, Anchor, Box, Value } from 'grommet';
import FormPrevious from 'grommet/components/icons/base/FormPrevious';
import Favorite from 'grommet/components/icons/base/Favorite';
import { postMutation, voteMutation, getBookByIdQuery } from '../graphql';
import { AUTH_TOKEN } from '../constants';



const BookAlone = props => {

    const { author, title, description, textSnippet, publishedDate, image, isbn, publisher, pageCount, id, votes } = props.book

    const publishInfo = publisher ? <strong>Published by {publisher} on <Timestamp value={publishedDate}
        fields='date' /></strong> : null

    const pagesInfo = pageCount ? <strong>{pageCount} pages</strong> : null

    const authToken = localStorage.getItem(AUTH_TOKEN);

    const favorite = !props.isFavorite ? 
    (<Mutation
        mutation={voteMutation}
        variables={{ bookId: id }}
        refetchQueries={() => [{ query: getBookByIdQuery, variables: { id } }]}
    >
        {voteMutation => (
            <Box pad='small' onClick={voteMutation}>
                <Anchor align='center' icon={<Favorite colorIndex='light-1' size="small" />}
                    label='Vote for this book'
                />
            </Box>
        )}
    </Mutation>) : 
    (<Box pad='small'>
            <Anchor align='center' icon={<Favorite colorIndex='light-1' size="small" />}
                label='You already voted for this book'
            />
        </Box>)
    return (
        <Section pad='medium'
            justify='center'
            align='center'>
            <Box pad='small' alignSelf='start'>
                <Anchor align='center' onClick={props.history.goBack} icon={<FormPrevious colorIndex='light-1' size="small" />}
                    label='Back to results'
                />
            </Box>
            <div className='bookalone'>
                <Box direction='row' pad='medium' align='start'>
                    <Image src={image}
                        alt={`${props.book.title} - ${author}`}
                        full={false} size='small' />
                    <Box pad='medium'>
                        <Heading strong tag='h3' margin='none'>
                            {title}
                        </Heading>
                        <div className='author'>
                            {author}
                        </div>
                        <Paragraph pad='medium'>
                            {publishInfo} {pagesInfo}
                        </Paragraph>
                        {votes &&
                            <Value value={votes.length}
                                icon={<Favorite colorIndex='light-1' size="small" />}
                                size='medium'
                                responsive={true}
                                reverse={true}
                                align='start' />}
                    </Box>
                </Box>

                {authToken && !props.isInCollection ?
                    (<Box pad='small'
                        justify='center'
                        align='start'>
                        <Mutation
                            mutation={postMutation} variables={{ author, title, description, textSnippet, publishedDate, image, isbn, publisher, pageCount }}
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
                        {favorite}
                    </Box>)
                    : authToken && props.isInCollection ? (<Button
                        label='Already in my collection'
                        primary={false}
                        secondary={false}
                        accent={false}
                        plain={false}
                        disabled={true}
                        type='button' />)
                        : (
                            <Box pad='small'
                                justify='center'
                                align='start'>
                                <Paragraph margin='medium'>
                                    <Link to="/login">
                                        <Anchor tag='span' align='start'
                                            label='Login' >Login</Anchor>
                                    </Link> to vote or save this book to your collection !
              </Paragraph>
                            </Box >)}
                <Box pad='small'
                    justify='center'
                    align='start'>
                    <Paragraph>
                        {description}
                    </Paragraph>
                </Box>
            </div >
        </Section >

    )
}

export default withRouter(BookAlone);