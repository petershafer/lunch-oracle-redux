/* container which maps state and dispatches to its props 
  so it can be referenced in the VoteButtons component */

const { bindActionCreators } = require('redux');
const { connect } = require('react-redux');
const { options: { creators } } = require('../actions');
const Options = require('../components/Options');

const mapStateToProps = ({ lunchReducer }) => ({ ...lunchReducer });

const mapDispatchToProps = (dispatch) => bindActionCreators({ ...creators }, dispatch);

const OptionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Options);

module.exports = OptionContainer;
