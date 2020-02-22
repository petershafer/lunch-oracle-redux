const React = require("react");
const { intersection } = require("lodash");
const {
  REQUESTS: { SUCCESSFUL, FETCHING, FAILED }
} = require("../constants");
const Loading = require("./Loading");

// Only applicable choices are shown.

class Choices extends React.Component {
  componentDidMount() {
    const { loadChoices } = this.props;
    loadChoices();
  }
  render() {
    const {
      selectedOptions,
      choices,
      choices_status,
      availableChoices
    } = this.props;
    return (
      <div>
        <p>Choices</p>
        {choices_status === FETCHING && <Loading />}
        {choices_status === FAILED && <p>Couldn't load choices!</p>}
        <ul>
          {availableChoices.length < 1 && choices_status === SUCCESSFUL ? (
            <li>No choices meet this criteria!</li>
          ) : (
            availableChoices.map(choice => {
              return <li>{choice.name}</li>;
            })
          )}
        </ul>
      </div>
    );
  }
}

module.exports = Choices;
