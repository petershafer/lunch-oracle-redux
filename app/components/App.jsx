const React = require("react");

// router
const Route = require("react-router-dom").Route;
const BrowserRouter = require("react-router-dom").BrowserRouter;
const hashHistory = require("react-router-dom").hashHistory;

/* Import Components */
const HelloWorld = require("./HelloWorld");
const About = require("./About");
const Lunch = require("../containers/LunchContainer");
const DarkMode = require("./DarkMode");

/* the main page for the about route of this app */
const App = function(props) {
  const { mode, isDark } = props;
  return (
    <BrowserRouter>
      <DarkMode preferDark={mode === true} preferLight={mode === false} handleMode={(mode) => { isDark(mode) }}>
        <div id="app">
          <Route exact path="/" component={Lunch} />
          <Route path="/lunch" component={Lunch} />
          <Route path="/hello" component={HelloWorld} />
          <Route path="/about" component={About} />
        </div>
      </DarkMode>
    </BrowserRouter>
  );
};

module.exports = App;
