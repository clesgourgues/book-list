import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Section } from 'grommet';
import Search from './Search';


const LOGGED_IN_USER_QUERY = gql`
      query LoggedInUserQuery {
      me {
          id
          name
        }
    }
`

const SearchSection = (props) => {
  const loggedInUser = props.loggedInUserQuery.me
  return (
    <Section pad='large'
      justify='center'
      align='center'
    >
      <Search user={loggedInUser} />
    </Section>
  )
};


export default graphql(LOGGED_IN_USER_QUERY, {
    name: 'loggedInUserQuery',
  })(SearchSection)
