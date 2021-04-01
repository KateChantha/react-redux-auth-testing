import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actionCreators from 'actions';

class CommentBox extends Component {
  state = { comment: '' };

  /** Component Live Cycle **/
  componentDidMount() {
    this.shouldNavigateAway();
  }

  componentDidUpdate() {
    this.shouldNavigateAway();
  }

  /** Helper Function **/
  shouldNavigateAway() {
    if (!this.props.auth) this.props.history.push('/')
  }

  /** Event Handler **/
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

function mapStateToProps(state) {
  return { auth: state.auth }
}
// actions is a prop object that contains actionCreators 
// Defining mapDispatchToProps As An Object
// https://react-redux.js.org/using-react-redux/connect-mapdispatch#defining-mapdispatchtoprops-as-an-object
export default connect(mapStateToProps, actionCreators)(CommentBox);