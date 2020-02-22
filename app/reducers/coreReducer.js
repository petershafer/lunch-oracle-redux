const { core: {  types: { SETMODE, ISDARK } }} = require('../actions');

function coreReducer(state = { mode: false, darkMode: false }, action) {
  switch (action.type) {
    case SETMODE: 
      return Object.assign({}, state, {
        mode: action.mode
      });
    case ISDARK: 
      return Object.assign({}, state, {
        darkMode: action.darkMode
      });
    default:
      return state;
  }
}

module.exports = coreReducer;
