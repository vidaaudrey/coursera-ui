import React from 'react';
import { css, cssWithClass, withStyles, ThemedStyleSheet } from 'src';
import {Avatar, Button} from 'src';
const _ = require('underscore');
import CourseCard  from '../program-common/CourseCard';
import S12nCard  from '../program-common/S12nCard';

class DomainCard extends React.Component {

  static defaultProps = {
    selectedCourseIds: [],
    selectedS12nIds: [],
  }

  render() {
    const {
      style, styles, selectedCourseIds, selectedS12nIds,
      onToggleCourseSelect, onToggleS12nSelect,
    } = this.props;

    const s12ns = _.chain(_.range(3))
                    .map((id) => ({
                      id,
                      isSelected: _(selectedS12nIds).contains(id)
                    }))
                    .value();
    const courses = _.chain(_.range(12))
                    .map((id) => ({
                      id,
                      isSelected: _(selectedCourseIds).contains(id)
                    }))
                    .value();

    return (
      <div {...css(styles.DomainCard)}>
        <h2 {...css(styles.domainName)}>Computer Science</h2>
        <h5 {...css(styles.cardType)}> Specializations</h5>
        <div className="row m-b-2">
            {s12ns.map((item, index) => (
              <div key={`S12nCard~${item.id}`} className="col-xs-12 col-md-6 col-lg-4">
                <S12nCard
                  id={item.id}
                  isSelected={item.isSelected}
                  onToggleS12nSelect={onToggleS12nSelect}
                />
              </div>
            ))}
        </div>
        <h4 {...css(styles.cardType)}> Courses</h4>
        <div className="row m-b-2">
            {courses.map((item, index) => (
              <div key={`CourseCard~${item.id}`} className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <CourseCard
                  id={item.id}
                  isSelected={item.isSelected}
                  onToggleCourseSelect={onToggleCourseSelect}
                />
              </div>
            ))}
        </div>
      </div>
    );
  }
}

function getStyles({coursePhotoSize}) {
  return {
    DomainCard: {
    }
  }
}

export default withStyles(({color, spacing}) => ({
  DomainCard: {
    textAlign: 'left',
  },
  domainName: {
    fontWeight: 'normal',
  },
  cardType: {
    textTransform: 'uppercase',
    color: color.secondaryText,
  }
}))(DomainCard);
