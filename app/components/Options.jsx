const React = require("react");
const {
  REQUESTS: { SUCCESSFUL, FETCHING, FAILED }
} = require("../constants");
const Loading = require("./Loading");

// All options get listed
// Active options get highlighted

class Options extends React.Component {
  componentDidMount() {
    const { loadOptions } = this.props;
    loadOptions();
  }
  render() {
    const {
      addOption,
      removeOption,
      clearOptions,
      selectedOptions,
      options,
      options_status
    } = this.props;
    const toggleOption = function(selected, option) {
      return selected ? removeOption(option) : addOption(option);
    };
    return (
      <div>
        <p className="no-select">
          Options <button onClick={() => clearOptions()}>❌</button>
        </p>
        {options_status === FETCHING && <Loading />}
        {options_status === FAILED && <p>Couldn't load options!</p>}
        <ul id="options" className="no-select">
          {options.map(option => {
            const isActive = selectedOptions.includes(option);
            return (
              <li>
                <span className={isActive && "active"}>
                  <button onClick={() => toggleOption(isActive, option)}>
                    {option}
                  </button>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

module.exports = Options;
