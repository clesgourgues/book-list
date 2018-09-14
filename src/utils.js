import { baseURL, API_KEY } from './constants.js'

export const searchCategories = [{ value: 'inauthor', label: 'I am looking for an author' }, { value: 'intitle', label: 'This is the title I search' }, { value: 'subject', label: 'Please search for subjects' }, { value: 'isbn', label: 'I entered an ISBN number' }, { value: 'free', label: 'This is a free search' }];

export const getSearchResult = result => {
  console.log(result)
  const bookList = result.items.map(book => {
    const obj = {}
    obj.title = book.volumeInfo.title ? book.volumeInfo.title : ''
    obj.author = book.volumeInfo.authors ? book.volumeInfo.authors[0] : ''
    obj.textSnippet = book.searchInfo.textSnippet ? book.searchInfo.textSnippet : ''
    obj.description = book.volumeInfo.description ? book.volumeInfo.description : ''
    obj.publishedDate = book.volumeInfo.publishedDate ? book.volumeInfo.publishedDate : ''
    obj.isbn = book.volumeInfo.industryIdentifiers ? book.volumeInfo.industryIdentifiers[1].identifier : ''
    obj.image = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ''
    obj.publisher = book.volumeInfo.publisher ? book.volumeInfo.publisher: ''
    obj.pageCount = book.volumeInfo.pageCount ? book.volumeInfo.pageCount : ''
    return obj
  }
  )
  return bookList
}

export const buildURL = ({ target, suggestion }) => {
  const query = target.value.split(" ").join("+")
  console.log(query)
  return (
  suggestion.value === 'free' ?
    `${baseURL}?q=${target.value}&maxResults=20&orderBy=newest&langRestrict=fr&key=${API_KEY}` :
    `${baseURL}?q=+${suggestion.value}:${query}&maxResults=20&orderBy=newest&langRestrict=fr&key=${API_KEY}`
)
}