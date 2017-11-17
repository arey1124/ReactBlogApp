import React, { Component } from 'react';

import './App.css';

import $ from 'jquery';

import Blogs from './Components/Blog';

import NewBlogs from './Components/NewBlogs';

import uuid from 'uuid';

import AddBlog from './Components/AddBlog';

import NavBar from './Components/NavBar';
import { Col, Pagination,Label} from 'react-bootstrap';




var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;


class App extends Component {
  constructor(){
    super();
    this.state = {
      blogs:[],
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
      this.setState({ blogs: [
          {
            id : uuid.v4(),
            title : 'Business Blog',
            category : 'Business',
            desc : 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla'
          },
          {
            id : uuid.v4(),
            title : 'Adventure Blog',
            category : 'Adventure',
            desc : 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla'
          },
          {
            id : uuid.v4(),
            title : 'Travel Blog',
            category : 'Travel',
            desc : 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla'
          }
        ]});

      this.getBlogs();
  }

  componentDidMount(){
      this.getBlogs();
  }

  handleAddBlog(blog){
    let blogs = this.state.blogs;
    blogs.push(blog);
    this.setState({blogs:blogs});
  }

  handleDeleteBlog(id){
    let blogs = this.state.blogs;
    let index = blogs.findIndex(x => x.id === id);
    blogs.splice(index,1);
    this.setState({blogs:blogs});
  }



  render() {
    return (
        <div className="App">
          <h1><Label bsStyle="success" >Home</Label></h1>
          <hr />

          <Blogs blogs = {this.state.blogs} onDelete={this.handleDeleteBlog.bind(this)} />

          <Col sm={12}>
            <Pagination prev next  first last ellipsis boundaryLinks items={20} maxButtons={5} activePage={this.state.activePage} onSelect={this.handleSelect}/>
          </Col>

          <hr />

          <Col sm={12}>
            <AddBlog addBlog={this.handleAddBlog.bind(this)}/>
          </Col>

          <hr />
        </div>
    );
  }
}

export default App;
