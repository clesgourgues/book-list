import React from 'react'
import { Box, Header, Menu, Anchor, Title } from 'grommet'
import { Menu as MenuIcon } from 'grommet-icons'

const AppHeader = () => (
  <Header
    size='large'>
    <Box
      margin='small'>
      <Title>
        Booklist
  </Title>
    </Box>
    <Box flex={true}
      justify='end'
      direction='row'
      responsive={false}>
      <Menu icon={<MenuIcon />}
        dropAlign={{ "right": "right" }}>
        <Anchor href='#'
          className='active'>
          First
      </Anchor>
        <Anchor href='#'>
          Second
      </Anchor>
        <Anchor href='#'>
          Third
      </Anchor>
      </Menu>
    </Box>

  </Header>
)

export default AppHeader
