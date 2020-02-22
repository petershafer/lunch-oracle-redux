const React = require("react");
const { useState, useEffect } = require("react");

const light = false;
const dark = true;

const DarkMode = (props) => {
  const {
    override = false,
    lightTheme = 'light',
    darkTheme = 'dark',
    children,
    handleMode = () => {},
  } = props;
  const [mode, setMode] = useState(light);
  function setColorScheme(x) {
    const isDark = (x.matches && !override) || (!x.matches && override);
    setMode(isDark);
    handleMode(isDark);
  }
  useEffect(() => {
    var x = window.matchMedia("(prefers-color-scheme: dark)")
    setColorScheme(x) // Call listener function at run time
    x.addListener(setColorScheme) // Attach listener function on state changes
  });
  return (
    <div className={ mode === light ? lightTheme : darkTheme }>
      { children || null }
    </div>
  );
};

module.exports = DarkMode;



