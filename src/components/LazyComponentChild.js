import React from 'react';

function LazyComponentChild({ text }) {
  return <div>LazyComponentChild. {text}</div>;
}

export default React.memo(LazyComponentChild);
