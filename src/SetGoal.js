import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'
import BookCase from './BookCase'
import { Tabs } from 'react-bootstrap';
import { Tab } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';

// The max number of reading goals is 10 at one time. 
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

class SetGoal extends Component{
// Set a reading goal to learn new skills and/or summer reading

  render() {


const BookCasesId = BookCases.map(id => <Tab key={id.key} title={id.key} eventKey={id.key}  className="active"><Link to={`#${id.key}`} activeClassName="active">Tab {id.key}</Link><BookCase key={id.key} /></Tab>);


    return (
    	// Now since we have each individual Bookcase assigned the bookcase to the tab.
		 	<div>
			<Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
  				<Tab eventKey={1} title="Tab 1">
    				{BookCasesId}
 				 </Tab>
  				<Tab eventKey={2} title="Tab 2">
   					Tab 2 content
  				</Tab>
  				<Tab eventKey={3} title="Tab 3" disabled>
    				Tab 3 content
  				</Tab>
			</Tabs>;
			</div>
    )
  }
}

export default SetGoal