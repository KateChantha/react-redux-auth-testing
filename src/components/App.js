import React from 'react'
import { Route } from 'react-router-dom';

import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'

// TODO: Move these two routes to index.js
const App = () => {
  return (
    <div>
      <Route path='/post' component={CommentBox} />
      <Route exact path='/' component={CommentList} />
    </div>
  )
}

export default App


