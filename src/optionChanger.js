import React, { Component } from 'react'
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { ButtonToolbar } from 'react-bootstrap';

class OptionChanger extends Component{
state = {
	bookList: this.props.books.shelf || "none",
	show: false
};

constructor(props,context){
    super(props,context);
    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
}

onChangeShelf = (book, shelf) => {
	this.setState({shelf});
	this.props.onChangeShelf(book, shelf);
	this.setState({
        show: true
    });
}

addNewBooks = (props) => {
	this.props = props;
	this.setState
		({ bookList: this.props.books.shelf});
}

handleShow(){
    this.setState({
        show: true
    });
}

handleHide(){
    this.setState({
        show: false
    });
}

componentWillReceiveProps = (props) => {
    this.props = props;
    this.setState({bookList: this.props.book.shelf});
}

render() {
  
			return (        
			       <div>
			       <ButtonToolbar>
        <Modal
          {...this.props}
          show={this.state.show}
          onHide={this.handleHide}
          dialogClassName="custom-modal"
          book={this.props.book}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">
              Are You Sure You Would Like to Add This Book?
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Are you sure you want to add that book {this.props.book.title}?
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleHide}>Okay</Button>
          </Modal.Footer>
        </Modal>
      </ButtonToolbar>
			       		<div className="book-shelf-changer">
			       			<select
			                    value={this.state.bookList} onChange={(e) => this.onChangeShelf(this.props.book, e.target.value)} >
			       				<option value="move" disabled>Move...</option>
			       				<option value="currentlyReading">Currently Reading</option>
			       				<option value="wantToRead"> Want To Read</option>
			       				<option value="read">Read</option>
			       				<option value="none">None</option>
			       			</select>
			       		</div> 
			       </div>
			  		)

			  }

}
export default OptionChanger