import React from 'react';
import { Section } from 'grommet';
import Search from './Search';

const SearchSection = (props) => (
  <Section pad='large'
    justify='center'
    align='center'
  >
    <Search />
  </Section>
);

export default SearchSection;