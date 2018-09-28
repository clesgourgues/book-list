import React from 'react'
import { Tiles, Tile } from 'grommet'
import Book from './Book'


const BookList = props => (
    <Tiles fill={true}
      flush={false}
      selectable={true}
    >
      {props.books.map(book => <Tile key={book.id} align='center'
        pad='small'
        margin='small'>
        <Book book={book} />
      </Tile>)}
    </Tiles>
  )

export default BookList