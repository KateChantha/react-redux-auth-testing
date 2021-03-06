# React Redux and Testing

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## [Absolute Imports](https://create-react-app.dev/docs/importing-a-component/#absolute-imports)
- You can configure your application to support importing modules using absolute paths. This can be done by configuring a jsconfig.json or tsconfig.json file in the root of your project.
- We use absolute import path from the 'src' directory.


## Write Tests
1. Look at each individual part of application
2. Imagine telling a friend what this piece of code does
3. Write test to verify each part does what you expect
4. Write a clean up code to unmount the component after the test run

## Write Tests with [enzyme](https://enzymejs.github.io/enzyme/)
- Note: setupTest.js is a config file to work with enzyme.

##### Interact with enzyme in 3 ways
1. Static - rennder the given component and return a plain HTML
2. Shallow - render just the given component and none of its children
3. Full DOM - render the component and all of its children and then return an object taht we can use to interact with that component, so we can simulate click event or entering text. This render method let us modify the returning object afterwards.

##### Simulate events in Full DOM render
https://enzymejs.github.io/enzyme/docs/api/ReactWrapper/simulate.html 
###### simulate
```
 .simulate(event[, mock]) => Self
```
- Arguments
1. event (String): The event name to be simulated
2. mock ```(Object [optional])```: A mock event object that will be merged with the event object passed to the handlers.

###### force component to update
```
 .update() => Self
```
Syncs the enzyme component tree snapshot with the react component tree. Useful to run before checking the render output if something external may be updating the state of the component somewhere.<br/>

NOTE: this does not force a re-render. Use wrapper.setProps({}) to force a re-render.

###### Implement using setProps instead of update()
```
 .setProps(nextProps[, callback]) => Self
```
A method that sets the props of the root component, and re-renders. Useful for when you are wanting to test how the component behaves over time with changing props. Calling this, for instance, will call the componentWillReceiveProps lifecycle method.<br/>

Similar to setState, this method accepts a props object and will merge it in with the already existing props.

###### use render() to test text inside component
```
  .render() => CheerioWrapper
```
Returns a CheerioWrapper around the rendered HTML of the single node's subtree. It must be a single-node wrapper.


## Test Redux
##### Implement reusable HOCs as a Provider componet
This approach helps to make it easy to maintain 
- create a Root componet that will work as a HOCs see Root.js
- import Root to src/index.js
- import Root to any test file that need to acces a redux store

##### ROADBLOCK: How to get data into redux store
Testing CommentList componet<br/>
- How to simulate getting data into redux store, so then, redux store can share the update data to CommentList
- and we don't want to have to invoke CommentBox in order to test CommentList
One way to solve this issue
- By adding initialState as a props in Root.js
- Now, in CommentList.test.js, we can make used of initialState property to mock the comments data

## Integration Tests
##### ROADBLOCK: axios is not able to make a network request 
- due to axios the is in side JSDom not in the real browser.
We can solve this issue by using 'moxios' to fake out a request that to trick axios that the request is successfully be issued.
- import moxios in src/__tests__/integration.test.js

## Redux
#### [Defining mapDispatchToProps As An Object](https://react-redux.js.org/using-react-redux/connect-mapdispatch#defining-mapdispatchtoprops-as-an-object)

###### in CommentBox.js
- are set up with Defining mapDispatchToProps As An Object pattern
```
import { connect } from 'react-redux'
import * as actionCreators from 'actions';

class CommentBox extends Component {
  state = { comment: '' };

  handleChange = (evt) => {
   /* */
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.saveComment(this.state.comment)
    this.setState({ comment: ''})
  }

  render() {
    return (
      <div>
       /* other children */
        <button onClick={this.props.saveComment}>Fetch Comments</button>
      </div>
    );
  }
}

export default connect(null, actionCreators)(CommentBox);

```
- actionCreators is passed in as a second argument in connect()
- then CommentBox receives as a props
- equivalent to 
```
{ saveComment, saveComment } = this.props

```

Below is a example code snippet from React Redux documentation
```
import { increment, decrement, reset } from './counterActions'

const actionCreators = {
  increment,
  decrement,
  reset,
}

export default connect(mapState, actionCreators)(Counter)

// or
export default connect(mapState, { increment, decrement, reset })(Counter)

```

## Steps of Building a HOC
1. Write the logic you want to reuse in a component
2. Create A HOC file and add the HOC scaffold
3. Move the reusable logic into the HOC
4. Pass props/config/behavioir through to chlid component
