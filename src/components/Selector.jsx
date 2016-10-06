import React, { Component } from 'react';

class Selector extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id } = this.props;

    return (
      <div className="selector">
        <ul>
          <li className={id === '1' ? 'active' : ''}><a href="#" onClick={() => { this.props.onClick("1") }}>Vehicle 1</a></li>
          <li className={id === '2' ? 'active' : ''}><a href="#" onClick={() => { this.props.onClick("2") }}>Vehicle 2</a></li>
          <li className={id === '3' ? 'active' : ''}><a href="#" onClick={() => { this.props.onClick("3") }}>Vehicle 3</a></li>
        </ul>
      </div>
    )
  }
}

export default Selector;