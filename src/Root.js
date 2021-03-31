import React from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise'
import reducers from 'reducers'

/**
 * add initial state as an optional props
 * set default value on the initialState property
 * if someone call Root componet without pass in initialState, the initial state value will be an default value of an empty object
 * To add initialState as a props will help working with writing a test
 */

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ children, initialState = {}}) => {
  const store = createStore(
    reducers, 
    initialState, 
    applyMiddleware(reduxPromise)
  )

  return (
    <Provider store={store} >
      { children }
    </Provider>
  )
} 