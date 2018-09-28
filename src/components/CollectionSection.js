import React from 'react';
import { Query } from 'react-apollo';
import { Redirect } from 'react-router';
import { getUserNameQuery } from '../graphql';
import { Section, Notification } from 'grommet';
import Spinning from 'grommet/components/icons/Spinning'
import Collection from './Collection';
import { AUTH_TOKEN } from '../constants'


const CollectionSection = (props) => {
  const authToken = localStorage.getItem(AUTH_TOKEN);
  return (
    authToken ?
      (<Query query={getUserNameQuery}>
        {({ loading, error, data: { me } }) => {
          if (loading) return <Spinning />
          if (error) return <Notification
          message='Something went wrong, please retry'
          status='critical' />
          return (<Section pad='large'
            justify='center'
            align='center'
          >
            <Collection user={me} />
          </Section>
          )
        }}
      </Query>) : (<Redirect
        to={{
          pathname: "/login"
        }}
      />
      )
  )
};


export default CollectionSection
