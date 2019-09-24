import React, { Component } from 'react';
import BookShelf from './BookShelf'
import Book from './Book'
import { Tabs } from 'react-bootstrap';
import { Tab } from 'react-bootstrap';
import App from './App'
import { search, update, getAll } from './BooksAPI'
import * as BooksAPI from './BooksAPI'
import {Link} from 'react-router-dom'
import * as Util from './Util.js';

class Search extends Component{

state = {
  query: "",
  books: [],
  quickView: {},
  bookList: this.props.books.shelf || "none"
};



queryTimer = null; 

changeQuery = (value) =>{
  clearTimeout(this.queryTimer);
  this.setState({query: value});
  this.queryTimer = setTimeout(this.updateSearch, 250);
}

updateSearch = () => {
  if(this.state.query === ""){
    {this.setState({ error: false, books: []})}
    return;
  }
    BooksAPI
    .search(this.state.query)
      .then(response => {
        let newList = [];
        let searchError = false;
        
        if(response.length === undefined || (this.state.error && this.state.error !== "empty query")){
          searchError = true;
        }else if(response.length){
          this.setState({books: response, bookList: this.props.books.shelf})
          newList = Util.shelfSortSearch(this.props.books, response);
          console.log("Shelf" + this.props.books.shelf)
        }
      this.setState({error: searchError})
        
      });
}




  render = () => {
   console.log("search" + this.state.books)
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
          <div className="search-books-input-wrapper">
             <input type="text" placeholder="Search by title or author" onChange={(e) => this.changeQuery(e.target.value)} value={this.state.query.value}/>
          </div>
        </div>
        <div className="search-books-results">
        {this.state.error && (
          <div className="search-error">
            There was a problem with your search.
          </div>
        )}{!this.state.error && (
          <span className="search-count">
          {this.state.books.length} &nbsp; books match your search
          </span>
          )
        }
                        <ol className="books-grid">
                            {this.state.books && this
                                .state
                                .books
                                .map(book => (
                                    <li key={book.id}>
                                        <Book
                                            book={book}
                                            onChangeShelf={this.props.onChangeShelf}/>
                                    </li>
                                ))}{!this.state.books}
                        </ol>
</div>
      </div>
    )
  }
}

export default Search