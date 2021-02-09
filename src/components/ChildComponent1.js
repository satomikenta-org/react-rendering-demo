import React from 'react';

// ChildComponent1 is re-rendering when Root(Parent) Component is rendering even if count props have no change.
// If you wanna ChildComponent1 to re-render only when count props is changed, then use React.memo.
const ChildComponent1 = ({ count }) => {
  console.log(" ChildComponent 1: RENDER !!");
  return (
    <div style={{ border: '1px solid black', marginTop: '20px' }}>
      <h1>ChildComponent1</h1>
      <h5>I am always re-rendering even if my props 'count' have not changed.</h5>
      <div>COUNT: {count}</div>
    </div>
  )
};

export default ChildComponent1;