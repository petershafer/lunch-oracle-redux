const { union, remove, assign, intersection } = require("lodash");
const {
  options: { types: { ADDOPTION, REMOVEOPTION, CLEAROPTIONS, LOADOPTIONS } },
  choices: { types: { LOADCHOICES } }
} = require("../actions");

// Define the shape of the state for this portion of the store.
const initialState = {
  selectedOptions: [],
  availableChoices: [],
  choices: [],
  choices_status: null,
  options: [],
  options_status: null,
};

// Define handlers for specific actions in the reducer.
function updateChoices (choices, selectedOptions) {
  return choices.filter(choice => {
    return (
      selectedOptions.length ==
      intersection(selectedOptions, choice.options).length
    );
  });
}

function loadOptions (state, action) {
  const payload = {};
  if (action.data) {
    payload.options = action.data;
  }
  if (action.status) {
    payload.options_status = action.status;
  }
  return Object.assign({}, state, payload);
}

function loadChoices (state, action) {
  const choicesPayload = {};
  if (action.data) {
    choicesPayload.choices = action.data;
    choicesPayload.availableChoices = action.data;
  }
  if (action.status) {
    choicesPayload.choices_status = action.status;
  }
  return Object.assign({}, state, choicesPayload);
}

function addOption (state, action) {
  const newOptionsAdded = union(state.selectedOptions, [action.option]);
  return Object.assign({}, state, {
    selectedOptions: newOptionsAdded,
    availableChoices: updateChoices(state.choices, newOptionsAdded)
  });
}

function removeOption (state, action) {
  const optionsRemoved = remove(
    state.selectedOptions,
    option => option !== action.option
  );
  return Object.assign({}, state, {
    selectedOptions: optionsRemoved,
    availableChoices: updateChoices(state.choices, optionsRemoved)
  });
}

function clearOptions (state, action) {
  return Object.assign({}, state, {
    selectedOptions: [],
    availableChoices: state.choices
  });
}

// The reducer itself, which takes the action handlers and wires them up to the store.
function lunchReducer(state = initialState, action) {
  switch (action.type) {
    case LOADOPTIONS:
      return loadOptions(state, action);
    case LOADCHOICES:
      return loadChoices(state, action);
    case ADDOPTION:
      return addOption(state, action);
    case REMOVEOPTION:
      return removeOption(state, action);
    case CLEAROPTIONS:
      return clearOptions(state, action)
    default:
      return state;
  }
}

module.exports = lunchReducer;
