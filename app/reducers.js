const { combineReducers } = require('redux');

/* reducers */

const votesReducer = require('./reducers/votesReducer');
const lunchReducer = require('./reducers/lunchReducer');
const coreReducer = require('./reducers/coreReducer');

module.exports = combineReducers({
  lunchReducer,
  votesReducer,
  coreReducer
});