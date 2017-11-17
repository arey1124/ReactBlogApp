import React, { Component } from 'react';

import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';

import {Link } from 'react-router-dom';

import { Col, Pagination,Label} from 'react-bootstrap';

import SingleComments from './SingleComment';







class Comments extends Component {


 constructor(){
    super();
    this.state = {
      comments:[]
    }
  }

  componentWillMount(){

	this.setState({ comments: [
	          {
	            title : 'Vishal',
	            comment : 'comment 1'
	          },
	          {
	            title : 'Arihant ',
	            comment : 'comment 2'
	          },
	          {
	            title : 'Rohit',
	            comment : 'comment 3'
	          }
	        ]});
	}


render() {

	let commentitems;

	if(this.state.comments){
		commentitems = this.state.comments.map(comm =>{
			return(
				<SingleComments key={comm.title} comm={comm}/>
				);
		});
	}
    return (

      	<div className="Comments">
	      	<h2><Label >Comments</Label></h2><br />
	        {commentitems}


	     </div>

        
    );
  }
}

export default Comments;