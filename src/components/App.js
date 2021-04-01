import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'
import * as actions from 'actions'

// TODO: refactor structure as commented below
class App extends Component {
  renderButton() {
    return (
        <button onClick={() => this.props.changeAuth(!this.props.auth)}>
            {this.props.auth ? "Sign Out" : "Sign In"}
        </button>
    );  
  }

  renderHeader() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post a comment</Link>
        </li>
        <li>
          {this.renderButton()}
        </li>
      </ul>
    )
  }

  render() {
    return (
        <div>
          { this.renderHeader() }
          <Route path='/post' component={CommentBox} />
          <Route exact path='/' component={CommentList} />
        </div> 
    )
  }
}

function mapStateToProps(state) {
  return { auth: state.auth }
}

export default connect(mapStateToProps, actions)(App);


// TODO: refactor to this structure
// import { BrowserRouter, Route } from 'react-router-dom'
// const App = () => {
//   return (
//       <BrowserRouter>
//         <Route path='/post' component={CommentBox} />
//         <Route exact path='/' component={CommentList} />
//       </BrowserRouter>
//   )
// }

// export default App


