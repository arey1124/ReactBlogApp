import React, { Component } from 'react';

import $ from 'jquery';

import NewBlogItems from './NewBlogItems';

import App from '../App';

import '../App.css';

import {  Col ,Label,Modal,Button} from 'react-bootstrap';


class NewBlogs extends Component {

  constructor(){
    super();
    this.state = {
      newblogs:[]
    }
  }

  getBlogs(){
      $.ajax({
        url : 'https://jsonplaceholder.typicode.com/posts',
        dataType : 'json',
        cache : false,
        success : function(data){
            this.setState({newblogs : data}, function(){
              console.log(this.state);
            });
        }.bind(this),
        error : function(xhr , status , err){
          console.log(err);
        }
      });
  }

  componentWillMount(){


      this.getBlogs();
  }

	
  render() {

  	let newblogitems;
	if(this.state.newblogs){
		newblogitems = this.state.newblogs.map(newblog =>{
			return(
				<NewBlogItems  key={newblog.title} newblog={newblog}/>
				);
		});
	}
  

    return (
      <div className="NewBlogs">
      	<h2><Label bsStyle="info" >Online Blog Posts</Label></h2>
        <h4>These posts are fetched from online using JSON placeholder</h4>
        {newblogitems}

      </div>
    );
  }
}


export default NewBlogs;
