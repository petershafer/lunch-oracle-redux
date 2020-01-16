const React = require('react');
const Link = require('react-router-dom').Link;
const OptionContainer = require('../containers/OptionContainer');
const Options = require('../components/Options');
const ChoiceContainer = require('../containers/ChoiceContainer');

/* the main page for the about route of this app */
const About = function() {
  return (
    <div>
      <h1>Lunch Oracle</h1>

      <p>Select your criteria for lunch on the left. Your choices will appear on the right.</p>
      
      <div id="interface">
        <div><OptionContainer /></div>
        <div><ChoiceContainer /></div>
      </div>
      
      <Link to='/'>Go home</Link>
    </div>
  );
}

module.exports = About;