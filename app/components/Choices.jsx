const React = require("react");
const { intersection } = require("lodash");
const { REQUESTS: { SUCCESSFUL, FETCHING, FAILED } } = require('../constants');

// Only applicable choices are shown.

class Choices extends React.Component {
  componentDidMount () {
    const { loadChoices } = this.props;
    loadChoices();
  }
  render() {
    const { selectedOptions, choices, choices_status } = this.props;
    const availableChoices = choices.filter((choice) => {
      return selectedOptions.length == intersection(selectedOptions, choice.options).length;
    });
    return (
      <div>
        <p>Choices</p>
        <ul>
          {
            choices_status === FETCHING && <li>...</li>
          }
          {
            choices_status === FAILED && <li>Couldn't load choices!</li>
          }
          { 
            availableChoices.length < 1 && choices_status === SUCCESSFUL
            ? (<li>No choices meet this criteria!</li>)
            : availableChoices.map((choice) => {
              return (<li>{ choice.name }</li>)
            })
          }
        </ul>
      </div>
    );
  }
}

module.exports = Choices;
