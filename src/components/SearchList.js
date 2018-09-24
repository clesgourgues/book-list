import React from 'react'
import { List, ListItem, Box } from 'grommet'


const SearchList = props => (
  <Box pad='medium'>
    <List selectable={true} onSelect={id => props.onSelect(props.books[id])}>
      {props.books.map(book => <ListItem key={book.isbn} justify='between'
        separator='horizontal'>
        <span>
          {book.title}
        </span>
        <span className='secondary'>
          {book.author}
        </span>
      </ListItem>)}
    </List>
  </Box>
)

export default SearchList