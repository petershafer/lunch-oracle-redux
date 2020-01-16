const React = require("react");
const { REQUESTS: { SUCCESSFUL, FETCHING, FAILED } } = require('../constants');

// All options get listed
// Active options get highlighted

class Options extends React.Component {
  componentDidMount () {
    const { loadOptions } = this.props;
    loadOptions();
  }
  render() {
    const { toggleOption, clearOptions, selectedOptions, options, options_status } = this.props;
    return (
      <div>
        <p className="no-select">
          Options (<span className="clickable" onClick={() => clearOptions()}>❌</span>)
        </p>
        <ul id="options" className="no-select">
          {
            options_status === FETCHING && <li>...</li>
          }
          {
            options_status === FAILED && <li>Couldn't load options!</li>
          }
          {
            options.map(option => {
              const isActive = selectedOptions.includes(option);
              return (
                <li
                  onClick={ () => toggleOption(isActive, option) }
                  className="clickable">
                  <span className={isActive && 'active'}>
                    { option }
                  </span>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

module.exports = Options;
