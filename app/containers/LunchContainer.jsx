/* container which maps state and dispatches to its props 
  so it can be referenced in the VoteButtons component */

const { bindActionCreators } = require('redux');
const { connect } = require('react-redux');
const { core: { creators: { setMode } } } = require('../actions');
const Lunch = require('../components/Lunch');

const mapStateToProps = ({ coreReducer }) => ({ ...coreReducer });

const mapDispatchToProps = dispatch => bindActionCreators({ setMode }, dispatch);

const ChoiceContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Lunch);

module.exports = ChoiceContainer;
