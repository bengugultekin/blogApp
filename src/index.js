import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import * as serviceWorker from './serviceWorker';
import "./App.css"
import { createStore} from 'redux'
import { act } from 'react-dom/test-utils';

const initialState = {
  count: 0
}

//store 
const store = createStore((state = initialState, action) => {
  switch(action.type) {
    case "INCREMENT":
      const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy
      }
    case "DECREMENT":
      return {
        count: state.count -1
      }
    case "RESET":
      return {
        count: 0
      }
    default:
      return state
  }
});


store.subscribe(() => {
  console.log(store.getState());
})

// increment, decrement, reaset => ACTIONS (Object)

store.dispatch({
  type: "INCREMENT",
  incrementBy: 10
})

store.dispatch({
  type: "INCREMENT"
})





// Dispatch

// Reducers




ReactDOM.render(<AppRouter/>, document.getElementById('root'));

serviceWorker.unregister();
