import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import * as serviceWorker from './serviceWorker';
import "./App.css"

import {createStore, combineReducers} from 'redux'


const state = {
  blog: [
    {
      id: 1,
      title: 'blog title 1',
      description: 'blog description 1',
      dateAdded: 0
    }
  ],
  auth: {
    userid: 1,
    username: 'bengugultekin',
    email: 'bengunurgultekin54@gmail.com'
  }
}

const blogsState = [];

const blogReducer = (state = blogsState, action) => {
  switch (action.type) {
    default: 
      return state;
  }
}

const authState = {};

const authReducer = (state = authState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const store = createStore(
  combineReducers({
    blogs: blogReducer,
    auth: authReducer
  })
)

console.log(store.getState());


ReactDOM.render(<AppRouter/>, document.getElementById('root'));

serviceWorker.unregister();
