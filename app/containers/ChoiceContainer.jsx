/* container which maps state and dispatches to its props 
  so it can be referenced in the VoteButtons component */

const { bindActionCreators } = require('redux');
const { connect } = require('react-redux');
const { choices: { creators: { loadChoices } } } = require('../actions');
const Choices = require('../components/Choices');

const mapStateToProps = ({ lunchReducer }) => ({ ...lunchReducer });

const mapDispatchToProps = dispatch => bindActionCreators({ loadChoices }, dispatch);

const ChoiceContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Choices);

module.exports = ChoiceContainer;