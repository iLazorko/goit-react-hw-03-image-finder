import React, { Component } from 'react';

export class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  onChange = evt => {
    this.setState({ inputValue: evt.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { inputValue } = this.state;

    if (inputValue === '') {
      return;
    }

    this.props.updateStateQuery(inputValue);
    this.setState({ inputValue: '' });
  };

  render() {
    return (
      <header>
        <form onSubmit={this.onSubmit}>
          <button type="submit">
            <span>Search</span>
          </button>

          <input
            type="text"
            placeholder="Search images and photos"
            onChange={this.onChange}
            value={this.state.inputValue}
          />
        </form>
      </header>
    );
  }
}
