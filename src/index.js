import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import * as serviceWorker from './serviceWorker';
import "./App.css";
import configureStore from './store/configureStore';
import { addBlog, removeBlog, editBlog} from './actions/blogActions' 

const store = configureStore();

store.subscribe(() => {
  console.log(store.getState());
})

const blog1 = store.dispatch(addBlog({title: 'blog title 1', description: 'blog description 1'}))
const blog2 = store.dispatch(addBlog({title: 'blog title 2', description: 'blog description 2', dateAdded: Date.now()}))

store.dispatch(addBlog({title: 'blog 3 title', description: 'blog 3 description', dateAdded: Date.now()}))
store.dispatch(addBlog({title: 'blog 4 title', description: 'blog 4 description', dateAdded: Date.now()}))
store.dispatch(addBlog({title: 'blog 5 title', description: 'blog 5 description', dateAdded: Date.now()}))

store.dispatch(removeBlog({id: blog1.blog.id}))
store.dispatch(editBlog(blog2.blog.id, {title: 'updated blog title', description: 'updated blog description'}))





ReactDOM.render(
                  <Provider store={store}>
                    <AppRouter/>
                  </Provider>, document.getElementById('root'));

serviceWorker.unregister();
