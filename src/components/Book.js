import React from 'react'
import { Card, Anchor } from 'grommet'
import { Link } from 'react-router-dom'

const Book = props => {
  const description = props.book.postedBy ? `Posted by ${props.book.postedBy.name}` : null
  return (
    <Link to={`/${props.book.id}`}>
      <Card thumbnail={props.book.image}
        label={props.book.author}
        heading={props.book.title}
        headingStrong={true}
        contentPad='small'
        textSize='small'
        truncate={true}
        size='small'
        wrap={true}
        link={<Anchor tag='span' href=''
          label={description} />}
      />
    </Link>
  )
}
export default Book