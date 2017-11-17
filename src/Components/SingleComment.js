import React, { Component } from 'react';

import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';

import {Link } from 'react-router-dom';







class SingleComment extends Component {
render() {
    return (
    	<div>
        	<strong>{this.props.comm.title}</strong> <br/> {this.props.comm.comment}<br/><hr/>
    	</div>
    );
  }
}

export default SingleComment;