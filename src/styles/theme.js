/* eslint-disable no-param-reassign, no-bitwise */

const {StyleSheet, css} = require('aphrodite/no-important');
const classNames = require('classnames');
const {
  turquoise500, blue500, yellow600,
  yellow500, red500, blue700, blue100,
  dawn200, dawn400, dawn300, dawn500,
  dusk100, dusk400,
  midnight600, midnight300, dusk200, red300,
  dusk500,
} = require('./colors');
const {coursera, strawberry} = require('./gradients');
const transition = require('./transition');

function cssWithClass(className, cssObj, ...rest) {
  const dynamicClassName = css(cssObj, ...rest);
  return {className: classNames(dynamicClassName, className)};
}

// Easier to write with ...css than always use className as it's not strictly className
function cssWith(cssObj, ...rest) {
  return {className: css(cssObj, ...rest)};
}

module.exports = {
  StyleSheet,
  css: cssWith,
  cssWithClass,
  spacing: {
    minWidth: 320,
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
  },
  font: {
    xs: '0.8rem',
    sm: '0.9rem',
    md: '1rem',
    lg: '1.5rem',
    xlg: '2.5rem',
  },
  breakPoints: {
    xs: 320,  // could be 0?
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1440,
  },
  color: {
    primary: blue500,
    darkPrimary: blue700,
    lightPrimary: blue100,
    accent: yellow600,
    textIcon: dawn200,
    primaryText: midnight600,
    secondaryText: midnight300,
    divider: dusk200,
    bgGray: dawn400,
    disabled: dawn400,
    lightGray: dawn300,
    gray: dusk100,
    darkGray: dusk400,

    warning: yellow500,
    danger: red300,
    success: turquoise500,
    info: blue500,
    white: '#fff',
    whiteHalf: 'rgba(255,255,255,0.50)', // Todo: discuss about opacity
    icon: midnight600,
    shadow: dawn500,
  },
  gradient: {
    primary: coursera,
    secondary: strawberry,
  },
  transition,
  zIndex: {
    none: 0,
    xs: 1000,
    sm: 2000, // FixedContainer
    md: 3000,  // SmartScrollWrapper
    lg: 4000,
    xlg: 10000, // Critical, e.g. modal
  },
  // Component specific config may get moved out later
  button: {
    minWidth: 72,
    disabledTextColor: dusk200,
    disabledTextColorThemeDark: dusk500,
    size: {
      sm: {
        fontSize: '0.8rem',
        padding: '0.3rem 0.8rem',
      },
      md: {
        fontSize: '1rem',
        padding: '0.6rem 1rem',
      },
      lg: {
        fontSize: '1.2rem',
        padding: '1rem 1.6rem',
      },
    },
  },
};
