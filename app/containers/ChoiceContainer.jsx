/* container which maps state and dispatches to its props 
  so it can be referenced in the VoteButtons component */

const { connect } = require('react-redux');
const actions = require('../actions');
const Choices = require('../components/Choices');
const { REQUESTS: { SUCCESSFUL, FETCHING, FAILED } } = require('../constants');

const mapStateToProps = function({ lunchReducer: { selectedOptions, choices, choices_status } }) {
  return {
    selectedOptions,
    choices,
    choices_status
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    loadChoices: function(data=null, status=FETCHING) {
      fetch('api/choices')
        .then((response) => response.json())
        .then(data => dispatch(actions.choices.loadChoices(data, SUCCESSFUL)))
        .catch(() => dispatch(actions.choices.loadChoices(null, FAILED)));
      return dispatch(actions.choices.loadChoices(data, status));
    }
  }
}

const ChoiceContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Choices);

module.exports = ChoiceContainer;