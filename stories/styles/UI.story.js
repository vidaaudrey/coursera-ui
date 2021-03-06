import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import {theme} from 'src';
import Palette from '../support/Palette';
import ColorAll from '../support/ColorAll';
import Gradient from '../support/Gradient';
import Typography from '../support/Typography';
import Grid from '../support/Grid';
import BoxLayout from '../support/BoxLayout';
import Theme from '../support/Theme';

storiesOf('UI.all', module)
  .add('Colors', () => (
    <ColorAll />
  ))
  .add('Palette', () => (
    <Palette />
  ))
  .add('Gradient', () => (
    <Gradient />
  ))
  .add('Typography', () => (
    <Typography />
  ))
  .add('Grid', () => (
    <Grid showBreakPointNumber />
  ))
  .add('BoxLayout', () => (
    <BoxLayout />
  ))
  .add('Theme', () => (
    <Theme />
  ));
