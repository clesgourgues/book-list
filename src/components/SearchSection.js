import React from 'react';
import { Query } from 'react-apollo';
import { getUserNameQuery } from '../graphql';
import { Section, Notification } from 'grommet';
import Spinning from 'grommet/components/icons/Spinning'
import Search from './Search';
import { AUTH_TOKEN } from '../constants'


const SearchSection = () => {
  const authToken = localStorage.getItem(AUTH_TOKEN)
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
          <Search user={me} />
        </Section>
        )
      }}
    </Query>) : <Search />
  )
};


export default SearchSection
