import React from 'react'
import { List, ListItem } from 'grommet'


const SearchList = props => (
  <List selectable={true} onSelect={id => props.onSelect(props.books[id])}>
    {props.books.map(book => <ListItem key={book.id} justify='between'
      separator='horizontal'>
      <span>
        {book.title}
      </span>
      <span className='secondary'>
        {book.author}
      </span>
    </ListItem>)}
  </List>
)

export default SearchList