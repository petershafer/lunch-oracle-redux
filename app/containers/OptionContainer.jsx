/* container which maps state and dispatches to its props 
  so it can be referenced in the VoteButtons component */

const { connect } = require('react-redux');
const actions = require('../actions');
const Options = require('../components/Options');
const VoteButtons = require('../components/VoteButtons');
const { REQUESTS: { SUCCESSFUL, FETCHING, FAILED } } = require('../constants');

const mapStateToProps = function({ lunchReducer: { selectedOptions, options, options_status } }) {
  return {
    selectedOptions,
    options,
    options_status
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    clearOptions: function() {
      return dispatch(actions.options.clearOptions());
    },
    toggleOption: function(selected, option) {
      return selected
        ? dispatch(actions.options.removeOption(option))
        : dispatch(actions.options.addOption(option));
    },
    loadOptions: function(data=null, status=FETCHING) {
      fetch('api/options')
        .then((response) => response.json())
        .then(data => dispatch(actions.options.loadOptions(data, SUCCESSFUL)))
        .catch(() => dispatch(actions.options.loadOptions(null, FAILED)));
      return dispatch(actions.options.loadOptions(data, status));
    }
  }
}

const OptionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Options);

module.exports = OptionContainer;
