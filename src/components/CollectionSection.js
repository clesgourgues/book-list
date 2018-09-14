import React from 'react';
import BookQuery from './BookQuery';
import { Section } from 'grommet';

const CollectionSection = () => (
  <Section pad='small'
    justify='center'
    align='start'
  >
    <BookQuery />
  </Section>


);

export default CollectionSection;