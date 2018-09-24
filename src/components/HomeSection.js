import React from 'react';
import Search from './Search';
import CollectionSection from './CollectionSection';
import { Section, Box } from 'grommet';

const HomeSection = () => (
  <Box>
    <Section pad='large'
      justify='center'
      align='center'
    >
      <Search />
    </Section>
    <Section pad='none'
      justify='center'
      align='center'
    >
      <CollectionSection />
    </Section>
  </Box>


);

export default HomeSection;