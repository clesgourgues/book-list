import React, { Component } from 'react';
import { Grommet, Accordion, AccordionPanel } from 'grommet';
import AppHeader from './AppHeader';
import SearchSection from './SearchSection';
import CollectionSection from './CollectionSection';

class BookApp extends Component {
  render() {
    return (
      <Grommet>
        <AppHeader />
        <Accordion>
          <AccordionPanel heading='Search for books'>
            <SearchSection />
          </AccordionPanel>
          <AccordionPanel heading='My collection'>
            <CollectionSection />
          </AccordionPanel>
          <AccordionPanel heading='Other content'>
            Other
          </AccordionPanel>
        </Accordion>
      </Grommet>

    );
  }
}

export default BookApp;
