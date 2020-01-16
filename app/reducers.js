const { combineReducers } = require('redux');

/* reducers */

const votesReducer = require('./reducers/votesReducer');
const lunchReducer = require('./reducers/lunchReducer');

module.exports = combineReducers({
  lunchReducer,
  votesReducer
});