import React, { Component } from 'react';

export class NameContainer extends Component {
  render() {
    return (
      <div hidden={this.props.isHidden}>
        Name: {this.props.person.name} Age: {this.props.person.age}
      </div>
    )
  }
}

export default NameContainer
