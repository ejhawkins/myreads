import React, { Component } from 'react'
import OptionChanger from './optionChanger.js'
import NotificationMarker  from './NotificationMarker.js'
import * as BooksAPI from './BooksAPI'

class Book extends Component {

state = {
    books:[]
};


    render = () => {
     let url = (this.props.book.imageLinks && `url(${this.props.book.imageLinks.thumbnail})`);
   
        return (
            <div className="book">
                <div className="book-top">
                { this.props.book.title === this.props.value ? (
        <div><NotificationMarker value={this.state.value} /></div> ): (<div></div>
                )};
                    <button
                        className="book-cover"
                        style={{
                        width: 128,
                        height: 193,
                        backgroundImage: url
                    }}></button>
                    <OptionChanger book={this.props.book}  books={this.state.books} shelf={this.state.books.map(book => book.shelf)} onChangeShelf={this.props.onChangeShelf}/>   
                </div>
                 <div className="book-title">{this.props.book.title}</div>
                 <div className="book-title">{this.props.book.authors}</div>
            </div>
        )
    }
}

export default Book