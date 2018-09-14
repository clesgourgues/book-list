import React from 'react'
import { Layer } from 'grommet'
import Book from './Book'


const BookModal = props => (
  <Layer closer={true} flush={true} onClose={props.onClose}>
    <Book book={props.book} extended={true} onSave={props.onSave}/>
  </Layer>
)

export default BookModal