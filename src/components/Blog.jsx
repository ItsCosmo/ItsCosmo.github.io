import React, { Component } from 'react';

export default class Blog extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>Tell us what you think</p>
        <textarea></textarea>
        <button>Submit</button>
      </div>
    )
  }
}