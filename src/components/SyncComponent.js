import React, { PureComponent } from 'react';

class SyncComponent extends PureComponent {
  componentDidMount() {
    console.log('Sync Component Did Mount');
  }

  render() {
    return <div>Sync Component.</div>;
  }
}

export default SyncComponent;
