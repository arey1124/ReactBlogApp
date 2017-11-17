import React, { Component } from 'react';

import BlogItems from './BlogItems';

import { Col, Pagination,Label} from 'react-bootstrap';

class Blog extends Component {

	deleteBlog(id){
			this.props.onDelete(id);
	}

  render() {

  	

  	let blogitems;
	if(this.props.blogs){
		blogitems = this.props.blogs.map(blog =>{
			return(
				<BlogItems onDelete={this.deleteBlog.bind(this)} key={blog.title} blog={blog}/>
				);
		});
	}

    return (
      <div className="Blog">
      	<h2><Label bsStyle="danger" >Latest Blogs</Label></h2><br />
        {blogitems}

      </div>
    );
  }
}


export default Blog;
