import React, { Component } from 'react'
import { Box, Section, Label, SearchInput, Heading, Layer, Button } from 'grommet'
import { Close } from 'grommet-icons';
import { searchCategories, getSearchResult, buildURL } from '../utils.js';
import SearchList from './SearchList'
import BookModal from './BookModal'


class Search extends Component {
  state = {
    selectedBook: {},
    books: [],
    searchTerm: '',
    searchCategory: '',
    error: undefined,
    layerActive: false
  }


  searchBooks(args) {
    const url = buildURL(args)
    fetch(url, { method: 'get' })
      .then(response => response.json())
      .then(result => {
        this.setState({ books: getSearchResult(result), error: undefined })
      })
      .catch(error => this.setState({ books: undefined, error: error }));
  }

  handleSelect = book => {
    this.setState({ layerActive: true, selectedBook: book })
  }

  handleModalClose = () => {
    this.setState({ layerActive: false })
  }

  handleSave = () => {
    console.log(this.state.selectedBook)
  }

  reset = () => {
    this.setState({ books: [], searchTerm: '' })
  }

  render() {
    const layer = (this.state.layerActive)
      ? <BookModal book={this.state.selectedBook} onClose={this.handleModalClose} onSave={this.handleSave} />
      : null;
    return (
      <Box>
        {layer}
        <Section pad='small'
          justify='center'
          align='start'
        >
          <Label
            labelFor='search'
            align='start'
            margin='none'
          >Add a book to your collection</Label>
          <SearchInput
            name='search'
            id='search'
            placeHolder='Type your search'
            onSelect={({ target, suggestion }) => this.searchBooks({ target, suggestion })}
            onDOMChange={e => this.setState({ searchTerm: e.target.value })}
            suggestions={searchCategories}
          />
          <Button onClick={this.reset} icon={<Close />}
            type='reset' />
        </Section>
        <Section pad='small'
          justify='center'
          align='start'
        >
          <Heading tag='h2'
            strong={false}
            uppercase={false}
            truncate={false}
            align='start'
            margin='small'>
            Results
            </Heading>
          {this.state.books &&
            <SearchList onSelect={this.handleSelect} books={this.state.books} />}
        </Section>
      </Box>
    );
  }
}

export default Search

