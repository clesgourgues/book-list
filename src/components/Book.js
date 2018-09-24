import React from 'react'
import { Card } from 'grommet'
import BookAlone from './BookAlone'

const Book = props => (
    <Card thumbnail={props.book.image}
      label={props.book.author}
      heading={props.book.title}
      // description={props.books.textSnippet}
      headingStrong={true}
      contentPad='small'
      textSize='small'
      truncate={true}
      size='small'
      wrap={true}
    />
  )

export default Book