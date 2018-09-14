import React from 'react';
import { Section } from 'grommet';
import Search from './Search';

const SearchSection = (props) => (
  <Section pad='small'
    justify='center'
    align='start'
  >
    <Search />
  </Section>
);

export default SearchSection;