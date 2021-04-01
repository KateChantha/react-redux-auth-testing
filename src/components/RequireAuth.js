import React, { Component } from 'react';
import { connect } from 'react-redux'

const RequireAuth = (ChildComponent) => {
  class ComposedComponent extends Component {
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

    render() {
      return <ChildComponent {...this.props} />
    }
  }

  /** return with connect **/
  function mapStateToProps(state) {
    return { auth: state.auth }
  }
  return connect(mapStateToProps)(ComposedComponent)
}


export default RequireAuth
