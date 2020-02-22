const axios = require('axios');
const { REQUESTS: { SUCCESSFUL, FETCHING, FAILED } } = require('../constants');

/* actions */

const ADDOPTION = 'ADDOPTION';
const REMOVEOPTION = 'REMOVEOPTION';
const CLEAROPTIONS = 'CLEAROPTIONS';
const LOADOPTIONS = 'LOADOPTIONS';

const loadingOptions = function(data, status) {
  return {
    type: LOADOPTIONS,
    status,
    data
  };
}

const loadOptions = () => (dispatch) => {
  axios("api/options")
    .then(({ data }) => dispatch(loadingOptions(data, SUCCESSFUL)))
    .catch(() => dispatch(loadingOptions(null, FAILED)));
  dispatch(loadingOptions(null, FETCHING));
}

  
const addOption = function(option) {
  return {
    type: ADDOPTION,
    option
  }
};

const removeOption = function(option) {
  return {
    type: REMOVEOPTION,
    option
  }
};

const clearOptions = function() {
  return {
    type: CLEAROPTIONS,
  }
};

module.exports = {
 
  types: {
    ADDOPTION,
    REMOVEOPTION,
    CLEAROPTIONS,
    LOADOPTIONS,
  },
  creators: {
    loadOptions,
    addOption,
    removeOption,
    clearOptions
  }
  
}
