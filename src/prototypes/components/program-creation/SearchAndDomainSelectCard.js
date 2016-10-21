import React from 'react';
const {
  cssWithClass, StyleSheet, css, color, spacing, gradient, transition,
} = require('src/styles/theme');

import {Avatar, Button, SelectList} from 'src';
import {ContentFilterList} from 'src/components/svg/material';
import DomainSelectList from 'src/prototypes/components/program-creation/DomainSelectList';
const _ = require('underscore');

const mockListData = [
  {
    id: 'computer-science',
    label: 'Computer Science',
    isSelected: true,
  }, {
    id: 'arts-and-humanities',
    label: 'Arts & Humanities',
    isSelected: false,
  }, {
    id: 'data-science',
    label: 'Data Science',
    isSelected: true,
  }, {
    id: 'social-sciences',
    label: 'Social Science',
    isSelected: false,
  }, {
    id: 'life-sciences',
    label: 'Life Science',
    isSelected: false,
  }, {
    id: 'business',
    label: 'Business',
    isSelected: false,
  }, {
    id: 'personal-development',
    label: 'Personal Development',
    isSelected: false,
  }, {
    id: 'math-and-logic',
    label: 'Math & Logic',
    isSelected: false,
  }, {
    id: 'physical-science-and-engineering',
    label: 'Physical Science & Engineering',
    isSelected: false,
  },
];


class SearchAndDomainSelectCard extends React.Component {

  static propTypes = {
    onSetDomains: React.PropTypes.func.isRequired,
    onSetSearchKeyword: React.PropTypes.func.isRequired,
    selectedDomainIds: React.PropTypes.array.isRequired,
    searchKeyWord: React.PropTypes.string,
  }

  static defaultProps = {
    domainListData: mockListData,
    selectedDomainIds: [],
  }

  onSubmit = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    this.props.onSetSearchKeyword(this.searchRef.value);
  }

  onSelectChange = (id, newIsSelect, newListData) => {
    const selectedDomainIds = _.chain(newListData)
      .filter(item => item.isSelected)
      .pluck('id')
      .value();
    this.props.onSetDomains(selectedDomainIds);
  }

  render() {
    const {domainListData, selectedDomainIds, onSetSearchKeyword, searchKeyWord } = this.props;

    return (
      <div {...cssWithClass('p-b-1', styles.SearchAndDomainSelectCard)}>
        <div {...cssWithClass('container-fluid vertical-box p-a-1 m-b-1', styles.domainContainer)}>
          <DomainSelectList
            showSelectAll={false}
            onSelectChange={this.onSelectChange}
            alignCenter
            selectedDomainIds={selectedDomainIds}
          />
        </div>
        <div className="container horizontal-box align-items-vertical-center">
          <form className="flex-1 m-r-1" onSubmit={this.onSubmit} >
            <input
              type="text"
              placeholder="What do you want to learn?"
              {...css(styles.searchInput)}
              ref={r => (this.searchRef = r)}
              defaultValue={searchKeyWord}
              onChange={() => (onSetSearchKeyword(this.searchRef.value))}
            />
          </form>
          <button {...css(styles.iconButton)}>
            <ContentFilterList />
          </button>
        </div>
      </div>
    );
  }
}

module.exports = SearchAndDomainSelectCard;

const styles = StyleSheet.create({
  SearchAndDomainSelectCard: {
    backgroundColor: color.white,
    marginBottom: spacing.lg,
    borderBottom: `1px solid ${color.divider}`,
  },
  domainContainer: {
    maxWidth: 1200,
  },
  searchInput: {
    padding: 8,
    width: '100%',
    border: `1px solid ${color.divider}`,
  },
  iconButton: {
    backgroundColor: 'transparent',
    border: 'none',
  },
});
