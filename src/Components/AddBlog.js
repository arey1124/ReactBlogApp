import React, { Component } from 'react';

import uuid from 'uuid';

import {  Col ,Label} from 'react-bootstrap';

class AddBlog extends Component {

  constructor(){
    super();
    this.state = {
      newBlog:{}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static defaultProps ={
      categories : ['Web Design','Web Development','Android Development','Travel']
    }

    handleSubmit(e){

        if(this.refs.title.value === ''){
            alert('Title is required');
        }else{
          this.setState({newBlog:{
            id : uuid.v4(),
            title : this.refs.title.value,
            category : this.refs.category.value,
            desc : 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla'
          }},function(){
            //this.props.history.push('/');
              this.props.addBlog(this.state.newBlog);
          });
        }
        e.preventDefault();
    }

  render() {

      let categoryOptions = this.props.categories.map(category=>{
          return <option key={category}  value={category}>{category}</option>
      });

    return (

      <div >
        
        <h2><Label bsStyle="info" >Add Blog Post</Label></h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <Col sm={12}>
              <h3><Label bsStyle="warning" >Title</Label></h3><br />
            </Col>
            <Col sm={12}>
              <input type="text" ref="title" placeholder="Enter a title"/> <br /><br />
            </Col>
          </div>

          <div>
            <h3><Label bsStyle="warning" >Category</Label></h3><br />
            <select type="text" ref="category">
              {categoryOptions}
            </select>
          </div>
          <br/>
          <br/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

export default AddBlog;
