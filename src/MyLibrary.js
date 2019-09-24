import React, { Component } from "react";
import BookShelf from "./BookShelf"
import BookCase from "./BookCase"
import SetGoal from "./SetGoal"
import { Tabs } from "react-bootstrap"
import { Tab } from "react-bootstrap"
import ReactDOM from "react-dom"
import { Link } from "react-router-dom"
import * as BooksAPI from "./BooksAPI"
import App from "./App"

 

class MyLibrary extends Component{
state = {
	books: []
};


componentDidMount = () => {
  this.props.getBooks();
}

	render() {
		return (	

	  	<div className="list-books">
			<Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
			{this.props.BookCases.map(bookcase => <Tab eventKey={bookcase.case} title={bookcase.case} disabled>Book case {bookcase.case}<BookCase books={this.props.books} getBooks={this.getBooks} onChangeShelf={this.props.onChangeShelf} /></Tab>)}
    		</Tabs>   
      	</div>
		)

	}  
}


export default MyLibrary
