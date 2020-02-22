/* container which maps state and dispatches to its props 
  so it can be referenced in the VoteButtons component */

const { bindActionCreators } = require('redux');
const { connect } = require('react-redux');
const { core: { creators: { isDark } } } = require('../actions');
const App = require('../components/App');

const mapStateToProps = ({ coreReducer }) => ({ ...coreReducer });

const mapDispatchToProps = dispatch => bindActionCreators({ isDark }, dispatch);

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

module.exports = AppContainer;
