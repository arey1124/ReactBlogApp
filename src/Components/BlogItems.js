import React, { Component } from 'react';

import {  Col ,Label,Modal,Button} from 'react-bootstrap';

import Comments from './Comments';

class BlogItems extends Component {

	deleteBlog(id){
		this.props.onDelete(id);
	}

  constructor(props){
    super(props);
      this.state ={
      show : false,
    }
  }

  

  


  render() {

      let close = () => this.setState({ show: false });

    return (
      <div>
        <Col sm={12} className="BlogItems" onClick={() => this.setState({ show: true })}>
          <br/>
          <img src="http://www.deletop.com/static//media/upload/d45a0f9f-379d-4bd2-91dd-cb3be73f166c/48x48.png" /><br />
        	<h3>{this.props.blog.title}</h3> <br/> {this.props.blog.category}<br/><a href="#" onClick={this.deleteBlog.bind(this,this.props.blog.id)}>Hide Blog</a><br/>
        </Col>

        <Col lg={0}>
            <Modal show={this.state.show} onHide={close} container={this}  aria-labelledby="contained-modal-title">
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title">{this.props.blog.title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <img src="http://www.deletop.com/static//media/upload/d45a0f9f-379d-4bd2-91dd-cb3be73f166c/48x48.png" /><br />
                <h3>{this.props.blog.category}</h3> <br/> {this.props.blog.desc}<br/>
                <Comments />
                <Col sm={12}>
                  <input type="text" ref="comment" placeholder="Enter a Comment"/> {' '}
                  <input type="submit" value="Comment"/>
                </Col>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={close}>Close</Button>
              </Modal.Footer>
            </Modal>
        </Col>

      </div>

    );
  }
}

export default BlogItems;
