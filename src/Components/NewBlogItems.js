import React, { Component } from 'react';

import '../App.css';
import {  Col ,Label,Modal,Button} from 'react-bootstrap';


class NewBlogItems extends Component {

	

  render() {
    return (
    	<div >
	      	<Col sm={4} className="NewBlogItems" onClick={() => this.setState({ show: true })}>
	          <br/>
	          <img src="http://www.deletop.com/static//media/upload/d45a0f9f-379d-4bd2-91dd-cb3be73f166c/48x48.png" /><br />
	        	<h3>{this.props.newblog.title}</h3> <br/> {this.props.newblog.body}<br/>
	        </Col>
        </div>
    );
  }
}

export default NewBlogItems;
