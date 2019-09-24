import Search from "./Search"
import MouseTracker from "./MouseTracker"
import * as BooksAPI from "./BooksAPI"
import MyLibrary from "./MyLibrary"
import BookCase from "./BookCase"
import * as Util from "./Util.js"
import { Link } from "react-router-dom"
import { Route } from "react-router-dom"
import "./App.css"
import ReactDOM from "react-dom"
import React, { Component } from "react"

const BookCases = [
   {"case": 1},
   {"case": 2},
   {"case": 3},  
   {"case": 4},
   {"case": 5},
   {"case": 6},
   {"case": 7},
   {"case": 8},
   {"case": 9},
   {"case": 10}
 ]

class BooksApp extends React.Component {
state = {
  showSearchPage: false,
  books:[]
}

componentDidMount = () => {
  this.getBooks();
}

getBooks = () => {
  BooksAPI
    .getAll()
      .then(data => {
        this.setState({
          books: data
      });
    })
}


changeShelf = (book, shelf) => {
  BooksAPI
    .update(book, shelf)
    .then(response => {
     
      let groupOfBooks = this
        .state
        .books
        .slice(0);
     
      const books = groupOfBooks.filter(bookStack => bookStack.id === book.id);
      if (books.length) {
        
        books[0].shelf = shelf;
      } else {
       
        groupOfBooks.push(book);
      }
    
      this.setState({books: groupOfBooks});
    })
}




  render() { 

    return (
      <div className="app">
        <Route exact path='/search' render={(() => (<Search onChangeShelf={this.changeShelf} updateSearch={this.updateSearch} books={this.state.books}

         />))}/>
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <Route exact path='/' render={(() => (<MyLibrary BookCases={BookCases} {...this.state} getBooks={this.getBooks} onChangeShelf={this.changeShelf}/>))}/>
            <div className="open-search">
               <Link to='/search'>Add a book</Link>
            </div>
          </div>
        )}
      </div>
    )
  }
}


export default BooksApp
