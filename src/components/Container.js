import React, { Component } from 'react';

class Container extends Component {
  render() {
    const {size, color, children} = this.props
    return (
      <div style={{flex: size, backgroundColor: color}}>
        {children}
      </div>
    );
  }
}

export default Container;
