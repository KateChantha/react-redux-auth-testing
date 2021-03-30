import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from 'reducers'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
  return (
    <Provider store={createStore(reducers, {})} >
      { props.children}
    </Provider>
  )
} 