import React from 'react'
import { Article, Section, Headline, Heading, Image, Button, Paragraph, Timestamp } from 'grommet'

const BookAlone = props => (
  <Article>
    <Section pad='small'
      justify='center'
      align='start'>
      <Image src={props.book.image}
        alt={`${props.book.title} - ${props.book.author}`}
        full={false} size='small' />
      <Headline strong size='small' margin='none'>
        {props.book.title}
      </Headline>
      <Heading size='small' margin='none'>
        {props.book.author}
      </Heading>
    </Section>
    <Section pad='medium'
      justify='center'
      align='start'>
      <Button
        label='Save to my collection'
        onClick={() => props.onSave()}
        primary={false}
        secondary={false}
        accent={false}
        plain={false}
        type='submit' />
    </Section>
    <Section pad='medium'
      justify='center'
      align='start'>
      <Paragraph>
        <strong>Published by {props.book.publisher} on <Timestamp value={props.book.publishedDate}
          fields='date' /> - {props.book.pageCount} pages</strong>
      </Paragraph>
      <Paragraph>
        {props.book.description}
      </Paragraph>
    </Section>
  </Article>
)

export default BookAlone