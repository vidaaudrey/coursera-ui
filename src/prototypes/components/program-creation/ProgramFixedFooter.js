import React from 'react';
import { css, cssWithClass, withStyles, ThemedStyleSheet } from 'src';
import {Avatar, Button, FixedContainer} from 'src';
import {FOOTER_HEIGHT, CREATE_PROGRAM_STEPS} from '../../../constants/ProgramCreationAppConstants';
import ProgramFixedFooterProgramName from './ProgramFixedFooterProgramName';
import ProgramFixedFooterDomainSelection from './ProgramFixedFooterDomainSelection';
import ProgramFixedFooterCourseSelection from './ProgramFixedFooterCourseSelection';
const {
  stepCreateProgramName, stepSelectDomains, stepSelectCourses
} = CREATE_PROGRAM_STEPS;

class ProgramFixedFooter extends React.Component {

  render() {
    const {
      style, styles, step, onProgramNameNext,
      onDomainSelectionPrev, onDomainSelectionNext,
      totalSeats, s12nIds, courseIds, onCourseSelectionNext,
    } = this.props;

    return (
      <FixedContainer height={FOOTER_HEIGHT}>
        <div {...css(styles.ProgramFixedFooter)}>
          {step === stepCreateProgramName &&
            <ProgramFixedFooterProgramName onNext={onProgramNameNext}/>
          }
          {step === stepSelectDomains &&
            <ProgramFixedFooterDomainSelection
              onPrev={onDomainSelectionPrev}
              onNext={onDomainSelectionNext}
            />
          }
          {step === stepSelectCourses &&
            <ProgramFixedFooterCourseSelection
              courseIds={courseIds}
              s12nIds={s12nIds}
              totalSeats={totalSeats}
              onNext={onCourseSelectionNext}
            />
          }
        </div>
      </FixedContainer>
    );
  }
}

function getStyles({coursePhotoSize}) {
  return {
    Header: {
    },
    coursePhoto: {
      width: coursePhotoSize,
      height: coursePhotoSize,
    },
  }
}

export default withStyles(({color, gradient}) => ({
  ProgramFixedFooter: {
    background: color.white,
    height: FOOTER_HEIGHT,
    boxShadow: `0 -2px 4px 0 ${color.shadow}`,
  },
}))(ProgramFixedFooter);
