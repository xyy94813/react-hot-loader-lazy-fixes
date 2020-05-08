import React, { PureComponent } from 'react';
import LazyComponentChild from './LazyComponentChild';

class LazyComponent extends PureComponent {
  componentDidMount() {
    console.log('LazyComponent Did Mount');
  }
  render() {
    return (
      <div>
        I am LazyComponent.
        <br />
        <LazyComponentChild text="zxczxc"/>
      </div>
    );
  }
}

export default LazyComponent;
