const axios = require('axios');

const { REQUESTS: { SUCCESSFUL, FETCHING, FAILED } } = require('../constants');

/* actions */

const LOADCHOICES = "LOADCHOICES";

const loadingChoices = function(data, status) {
  return {
    type: LOADCHOICES,
    status,
    data
  };
}

const loadChoices = () => (dispatch) => {
  axios("api/choices")
    .then(({ data }) => dispatch(loadingChoices(data, SUCCESSFUL)))
    .catch(() => dispatch(loadingChoices(null, FAILED)));
  dispatch(loadingChoices(null, FETCHING));
}

module.exports = {
  types: { LOADCHOICES },
  creators: { loadChoices },
};
