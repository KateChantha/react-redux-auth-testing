import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actionCreators from 'actions';
import RequireAuth from 'components/RequireAuth';

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
        <button className='fetch-comments' onClick={this.props.fetchComments}>Fetch Comments</button>
      </div>
    );
  }
}


// actions is a prop object that contains actionCreators 
// Defining mapDispatchToProps As An Object
// https://react-redux.js.org/using-react-redux/connect-mapdispatch#defining-mapdispatchtoprops-as-an-object
export default connect(null, actionCreators)(RequireAuth(CommentBox));