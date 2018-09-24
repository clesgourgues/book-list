import React from 'react';
import BookQuery from './BookQuery';
import { Section } from 'grommet';

const CollectionSection = () => (
  <Section pad='large'
    justify='center'
    align='center'
  >
    <BookQuery />
  </Section>


);

export default CollectionSection;