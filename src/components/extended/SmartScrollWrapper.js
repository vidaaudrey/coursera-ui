/* eslint-disable no-use-before-define */
import React, {PropTypes, Component} from 'react';
import {
  cssWithClass, StyleSheet, css, color, spacing, gradient, transition, zIndex,
} from 'src/styles/theme';

import withScrollInfo from 'src/components/hocs/withScrollInfo';
import {compose, pure} from 'recompose';

const DELTA = 50;
const NAVBAR_HEIGHT = 60;

/**
 *  A wrapper component to create medium nav style container
 * 1. When user scroll down, the container will go up as usual
 * 2. As soon as user starts to scroll up, we'll show the container
 * User can config what's the delta scroll distance they want to trigger the update
 * and the delta (takes priority) can be prop or function argument
 */
const SmartScrollWrapper = ({
  lastScrollPosition, isScrollingDown, children, containerHeight = NAVBAR_HEIGHT,
  zIndex: zIndexProp, alwaysHide, isAutoScroll,
}) => {
  const hideContainer = (lastScrollPosition >= containerHeight && isScrollingDown && !isAutoScroll) || alwaysHide;
  const dynamicStyles = getStyles({containerHeight, zIndexProp});
  const hideStyle = (hideContainer && dynamicStyles.hideContainer) || {};
  // mergedStyles is combination of component height and top offset
  const mergedStyles = {...dynamicStyles.SmartScrollWrapper, ...hideStyle};

  return (
    <div {...css(styles.SmartScrollWrapper)} style={mergedStyles}>
      {children}
    </div>
  );
};

SmartScrollWrapper.propTypes = {
  // From withScrollInfo, get the top position of the wrapper component
  lastScrollPosition: React.PropTypes.number,

  // From withScrollInfo, get the scroll direction
  isScrollingDown: React.PropTypes.bool,

  children: React.PropTypes.node,
  // The height of the container, may be different if the window resizes
  // The parent container needs to pass the correct height
  containerHeight: React.PropTypes.number,

  // Make the wrapper always not visible
  alwaysHide: React.PropTypes.bool,

  // Customize zIndex when showing the content inside, defualt to zIndex.md,
  zIndex: React.PropTypes.number,

  // If in autoscroll mode, we'll default to not hide
  isAutoScroll: PropTypes.bool,
};

SmartScrollWrapper.defaultProps = {
  containerHeight: NAVBAR_HEIGHT,
};

function getStyles({containerHeight, zIndexProp}) {
  return {
    SmartScrollWrapper: {
      height: containerHeight,
      zIndex: zIndexProp || zIndex.lg,
    },
    hideContainer: {
      top: -containerHeight,
      maxHeight: 0,
      overflow: 'hidden',
    },
  };
}

module.exports = compose(
  withScrollInfo({delta: DELTA}),
  pure,
)(SmartScrollWrapper);

const styles = StyleSheet.create({
  SmartScrollWrapper: {
    minWidth: spacing.minWidth,
    backgroundColor: color.white,
    boxShadow: `0 2px 4px 0 ${color.shadow}`,
    position: 'fixed',
    top: 0,
    transition: 'top 0.2s ease-in-out',
    width: '100%',
    zIndex: zIndex.lg,
  },
  container: {
    width: '100%',
  },
});
