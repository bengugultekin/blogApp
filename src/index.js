import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import reportWebVitals from './reportWebVitals';
import "./App.css"

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<AppRouter/>, document.getElementById('root'));

serviceWorker.unregister();

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <AppRouter />
//   </React.StrictMode>
// );

// reportWebVitals();
