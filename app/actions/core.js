/* actions */

const SETMODE = "SETMODE";
const ISDARK = "ISDARK";

const setMode = function(mode) {
  return {
    type: SETMODE,
    mode
  };
};

const isDark = function(darkMode) {
  console.log(darkMode);
  return {
    type: ISDARK,
    darkMode
  };
};

module.exports = {
  types: { SETMODE, ISDARK },
  creators: { setMode, isDark },
};
