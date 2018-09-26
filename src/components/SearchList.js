import React from 'react'
import { List, ListItem, Box, Heading } from 'grommet'
import { categoryWording } from '../utils';


const SearchList = props => {
  const wording = new Map(categoryWording);
  const category = wording.get(props.searchCategory);
  return (
    <Box pad='medium'>
      <Heading tag='h3'
        strong={false}
        truncate={false}
        align='start'
        margin='small'>
        Results in {category} for <span className={'yellow'}>{props.searchTerm}</span>
      </Heading>
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
}

export default SearchList