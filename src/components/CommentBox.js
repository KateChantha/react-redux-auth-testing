import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from 'actions';

class CommentBox extends Component {
  state = { comment: '' };

  handleChange = (evt) => {
    this.setState({comment: evt.target.value})
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.saveComment(this.state.comment)
    // reset back to empty 
    this.setState({ comment: ''})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add Comment</h4>
          <textarea 
            value={this.state.comment} 
            onChange={this.handleChange}
          />
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
        <button onClick={this.props.fetchComments}>Fetch Comments</button>
      </div>
      
    );
  }
}

export default connect(null, actions)(CommentBox);