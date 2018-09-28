import React from 'react';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { Box, Header, Menu, Anchor, Title, Section } from 'grommet'
import { AUTH_TOKEN } from '../constants'

const AppHeader = (props) => {
  const authToken = localStorage.getItem(AUTH_TOKEN)
  return (
    <Section pad={{horizontal: 'large', vertical: 'none'}}>
      <Header
        size='large'>
        <Box
          margin='small'>
          <Link to="/">
            <Title>
              Booklist
        </Title>
          </Link>
        </Box>
        <Box flex={true}
          justify='end'
          direction='row'
          responsive={false}>
          <Menu responsive={true}
            inline={true}
            primary={false}
            closeOnClick={false}
            direction='row'>
            <Link to="/">
              <Anchor tag='span' align='start'
                label='Search Books'>Search Books</Anchor>
            </Link>
            <Link to="/collection">
              <Anchor tag='span' align='start'
                label='My collection'>My collection</Anchor>
            </Link>
            {authToken ? (
              <Link to="/">
                <Anchor tag='span' align='start'
                  label='Login' onClick={() => {
                    localStorage.removeItem(AUTH_TOKEN)
                    props.history.push(`/`)
                  }}>Logout</Anchor>
              </Link>
            ) : (
                <Link to="/login">
                  <Anchor tag='span' align='start'
                    label='Login' >Login</Anchor>
                </Link>
              )}
          </Menu>
        </Box>
      </Header>
    </Section>
  )
}

export default withRouter(AppHeader);
