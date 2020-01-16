const { union, remove, assign } = require("lodash");
const {
  options: { ADDOPTION, REMOVEOPTION, CLEAROPTIONS, LOADOPTIONS },
  choices: { LOADCHOICES }
} = require("../actions");

const initialState = {
  selectedOptions: [],
  choices: [],
  choices_status: null,
  options: [],
  options_status: null,
};

function lunchReducer(state = initialState, action) {
  switch (action.type) {
    case LOADOPTIONS:
      const payload = {};
      if (action.data) {
        payload.options = action.data;
      }
      if (action.status) {
        payload.options_status = action.status;
      }
      return Object.assign({}, state, payload);
    case LOADCHOICES:
      const choicesPayload = {};
      if (action.data) {
        choicesPayload.choices = action.data;
      }
      if (action.status) {
        choicesPayload.choices_status = action.status;
      }
      return Object.assign({}, state, choicesPayload);
    case ADDOPTION:
      return Object.assign({}, state, {
        selectedOptions: union(state.selectedOptions, [action.option])
      });
    case REMOVEOPTION:
      return Object.assign({}, state, {
        selectedOptions: remove(
          state.selectedOptions,
          option => option !== action.option
        )
      });
    case CLEAROPTIONS:
      console.log("Clearing all options");
      return Object.assign({}, state, {
        selectedOptions: []
      });
    default:
      return state;
  }
}

module.exports = lunchReducer;
