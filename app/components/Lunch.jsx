const React = require("react");
const Link = require("react-router-dom").Link;
const OptionContainer = require("../containers/OptionContainer");
const Options = require("../components/Options");
const ChoiceContainer = require("../containers/ChoiceContainer");

/* the main page for the about route of this app */
const Lunch = function(props) {
  const { mode, setMode, darkMode } = props;
  const toggleMode = (selectedMode) => setMode(selectedMode === mode ? null : selectedMode);
  return (
    <div>
      <h1>
        Lunch Oracle
        <span className={mode === false ? 'active' : ''}><button className="modeButton" onClick={() => toggleMode(false)}>☼</button></span>
        <span className={mode === true ? 'active' : ''}><button className="modeButton" onClick={() => toggleMode(true)}>☽</button></span>
      </h1>
      <p>
        Select your criteria for lunch on the left. Your choices will appear on
        the right.
      </p>
      <div id="interface">
        <div>
          <OptionContainer />
        </div>
        <div>
          <ChoiceContainer />
        </div>
      </div>
    </div>
  );
};

module.exports = Lunch;
