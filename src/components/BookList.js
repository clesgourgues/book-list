import React from 'react'
import { Tiles, Tile } from 'grommet'
import Book from './Book'


const BookList = props => (
  <Tiles fill={true}
    flush={false}
    selectable={true}
    // onSelect={...}
    >
    {props.books.map(book => <Tile key={book.id} align='center'
      pad='small'
      margin='small'>
      <Book book={book} short={true}/>
    </Tile>)}
  </Tiles>
)

export default BookList