import React, { Component } from 'react';
import Book from './Book'

import * as BooksAPI from './BooksAPI'

class BookShelf extends Component{

state = {
    books:[],
};

componentDidMount = () => {
    this.props.books
}

render() {
  return (        
          <div>
            <h1>{this.props.shelf.name}</h1>
            <ol className="books-grid">
                {this.props.shelf.books.map(book => (<li key={book.id}><Book book={book} getBooks={this.getBooks} onChangeShelf={this.props.onChangeShelf} value={this.props.value} /></li>))}        
            </ol>
          </div>



        )
  }  
}

export default BookShelf