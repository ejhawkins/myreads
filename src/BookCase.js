import React, { Component } from 'react';
import BookShelf from './BookShelf'
import { Tabs } from 'react-bootstrap';
import { Tab } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { ButtonToolbar } from 'react-bootstrap';
import App from './App'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import MyLibrary from './MyLibrary'
import NameForm from './NameForm'


class BookCase extends Component{

state = {
    books:[]
};

constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event) {
    this.setState({value: event.target.value});
}

handleSubmit(event) {
    alert('Book goal set for ' + this.state.value);
    event.preventDefault();
}

componentDidMount = () => {
    this.props.books
}

updateBookShelf = () => {
    const newCurrent = {
        name: "Currently Reading",
        books: this
                .props
                .books
                .filter(book => book.shelf === 'currentlyReading')
    }
    const newWant = {
        name: "Want to Read",
        books: this
                .props
                .books
                .filter(book => book.shelf === 'wantToRead')
    }
    const newRead = {
        name: "Read",
        books: this
                .props
                .books
                .filter(book => book.shelf === 'read')
    }
    return ([newCurrent, newWant, newRead]);
}



render() {
let {book} = this.props.books;
let bookShelves = [];
let select = this.props.books.map(book => <option value={book.title} onChange={this.handleChange}> {book.title} </option> )

if (this.props.books && this.props.books.length){
    bookShelves = this.updateBookShelf();  
}
console.log("the key in value",this.state.value)
return (
        <div>
        <form onSubmit={this.handleSubmit}>
        <label>
          (Coming Soon) Set Your Reading Goal:
        </label>
                <select value={this.state.value} onChange={this.handleChange}>{select}</select><Button type="submit" value="submit">Go</Button>
      </form>
            {bookShelves && bookShelves.map((shelf) => (<BookShelf value={this.state.value} books={this.props.books} getBooks={this.getBooks} key={shelf.name} shelf={shelf} onChangeShelf={this.props.onChangeShelf}/>))}
            }
       </div> 

        )
  }
}
export default BookCase