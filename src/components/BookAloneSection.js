import React from 'react';
import BookAlone from './BookAlone';
import { Query } from 'react-apollo';
import Spinning from 'grommet/components/icons/Spinning';
import { Notification } from 'grommet';
import { getBookByIdQuery, getUserNameQuery } from '../graphql';


const BookAloneSection = props => {
  const id = props.match.params.id
  return (
    <Query query={getUserNameQuery} fetchPolicy='cache-and-network'>
      {({ loading, error, data: { me } }) => {
        if (loading) return <Spinning />
        if (error) return <Notification
          message='Something went wrong, please retry'
          status='critical' />
        const userId = me.id
        return (<Query query={getBookByIdQuery} variables={{ id }} notifyOnNetworkStatusChange={true}>
          {({ loading, error, data }) => {
            if (loading) return <Spinning />
            if (error) return <Notification
              message='Something went wrong, please retry'
              status='critical' />
            const bookToRender = data.book;
            const isInCollection = userId === bookToRender.postedBy.id;
            const isFavorite = bookToRender.votes.filter(vote => vote.user.id === userId).length > 0

            return (
              <BookAlone 
              book={bookToRender}
              isInCollection={isInCollection}
              isFavorite={isFavorite} />
            )
          }}
        </Query>)
      }}
    </Query>
  )
}


export default BookAloneSection