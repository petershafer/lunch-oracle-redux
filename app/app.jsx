const React = require("react");
const { render } = require("react-dom");

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.less';

// redux
const { createStore, applyMiddleware } = require("redux");
const { Provider } = require("react-redux");
const reducers = require("./reducers");
const ReduxThunk = require('redux-thunk').default;
const { composeWithDevTools } = require('redux-devtools-extension');

const App = require('./containers/AppContainer');

let store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);

const { coreReducer: { mode } } = store.getState();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("main")
);
