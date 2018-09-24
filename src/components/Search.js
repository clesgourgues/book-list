import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Box, Label, SearchInput, Anchor, Select } from 'grommet'
import { Close } from 'grommet-icons';
import { searchCategories, getSearchResult, buildURL } from '../utils.js';
import SearchList from './SearchList'
import BookAlone from './BookAlone'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBook: {},
      books: [],
      searchTerm: '',
      searchCategory: '',
      error: undefined,
    }
    // create a ref to store the textInput DOM element
    this.textInput = React.createRef();
    // this.focusTextInput = this.focusTextInput.bind(this);
  }

  searchBooks(args) {
    this.setState({ searchCategory: args.suggestion.value })
    const url = buildURL(args)
    fetch(url, { method: 'get' })
      .then(response => response.json())
      .then(result => {
        this.setState({ books: getSearchResult(result), error: undefined })
      })
      .catch(error => this.setState({ books: undefined, error: error }));
  }

  handleSelect = book => {
    this.setState({ selectedBook: book })
  }

  handleBack = book => {
    this.setState({ selectedBook: [] })
  }

  handleSave = () => {
    console.log(this.state.selectedBook)
  }

  reset = () => {
    this.textInput.current.inputRef.value = '';
    this.setState({ books: [], searchTerm: '' })
  }

  render() {
    return (
      <Box justify='center'
        align='center'>
        <Label
          labelFor='search'
          align='start'
          margin='small'
        >Add a book to your collection</Label>
        <SearchInput
          ref={this.textInput}
          name='search'
          id='search'
          placeHolder='Type your search'
          onSelect={({ target, suggestion }) => this.searchBooks({ target, suggestion })}
          onDOMChange={e => this.setState({ searchTerm: e.target.value })}
          suggestions={searchCategories}
        />
        <Box justify='center'
          align='start'
          pad='medium'>
          <Select placeHolder='None'
            inline={false}
            multiple={true}
            //onSearch={...}
            options={['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight']}
            value={undefined}
            //onChange={...} 
            />
          <Anchor align='center' onClick={this.reset} icon={<Close color='white'/>}
            label='Cancel search'
          />
        </Box>
        {Object.keys(this.state.selectedBook).length > 0 ?
          <BookAlone handleBack={this.handleBack} book={this.state.selectedBook} /> :
          <SearchList onSelect={this.handleSelect} books={this.state.books} />}
      </Box>
    );
  }
}

export default withRouter(Search)

