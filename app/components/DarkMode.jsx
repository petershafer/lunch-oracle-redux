const React = require("react");
const { useState, useEffect } = require("react");

const light = false;
const dark = true;

const DarkMode = (props) => {
  const {
    lightTheme = 'light',
    darkTheme = 'dark',
    children = null,
    handleMode = () => {},
    preferDark = false,
    preferLight = false,
  } = props;
  const [mode, setMode] = useState(light);
  function setColorScheme(x) {
    const usingDarkMode = x.matches;
    const usingLightMode = !x.matches;
    const prefersDark = preferDark && !preferLight;
    const prefersLight = preferLight && !preferDark;
    const isDark = (usingDarkMode || prefersDark) && !prefersLight;
    setMode(isDark);
  }
  useEffect(() => {
    var x = window.matchMedia("(prefers-color-scheme: dark)")
    setColorScheme(x) // Call listener function at run time
    handleMode(x.matches);
    x.addListener((...args) => {
      handleMode(x.matches);
      setColorScheme(...args);
    }) // Attach listener function on state changes
    return () => {
      x.removeListener(setColorScheme)
    }
  });
  return (
    <div className={ mode === light ? lightTheme : darkTheme }>
      { children }
    </div>
  );
};

module.exports = DarkMode;



