import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Box, Label, SearchInput, Anchor, Form, Section } from 'grommet';
import Refresh from 'grommet/components/icons/base/Refresh';
import { searchCategories, getSearchResult, buildURL } from '../utils.js';
import SearchList from './SearchList'
import BookAlone from './BookAlone'
import BookQuery from './BookQuery.js';

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

  reset = () => {
    this.textInput.current.inputRef.value = '';
    this.setState({ books: [], searchTerm: '' })
  }

  render() {
    const userInfo = this.props.user ?
    (<Label
      labelFor='search'
      align='start'
      margin='small'
    >
    Hey {this.props.user.name}, add a book to your collection !</Label>) :
      (<Label
        labelFor='search'
        align='start'
        margin='small'
      >
      Search books, 
      <Link to="/login">
          <Anchor tag='span' align='start'
            label='Login' > login </Anchor>
        </Link>to save them to your collection !</Label>)
    return (
      <Section pad='large'
        justify='center'
        align='center'
      >
        <Box justify='center'
          align='center'>
          <Form plain={true}>
            <Box align='center' direction='column'>
              {userInfo}
              <SearchInput
                ref={this.textInput}
                name='search'
                id='search'
                placeHolder='Type your search'
                onSelect={({ target, suggestion }) => this.searchBooks({ target, suggestion })}
                onDOMChange={e => this.setState({ searchTerm: e.target.value })}
                suggestions={searchCategories}
              />
            </Box>
          </Form>
          <Box justify='center'
            align='start'
            pad='medium'>
            <Anchor align='start' onClick={this.reset} icon={<Refresh size="small" colorIndex='light-1' />}
              label='Cancel search'>Clear search</Anchor>
          </Box>
          {this.state.books.length === 0 && <BookQuery />}
          {Object.keys(this.state.selectedBook).length > 0 ?
            <BookAlone handleBack={this.handleBack} book={this.state.selectedBook} /> :
            this.state.searchTerm ?
              <SearchList
                searchTerm={this.state.searchTerm}
                searchCategory={this.state.searchCategory}
                onSelect={this.handleSelect}
                books={this.state.books} /> : null}
        </Box>
      </Section>
    );
  }
}

export default withRouter(Search)

