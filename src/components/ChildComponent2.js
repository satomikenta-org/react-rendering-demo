import React from 'react';

// without React.memo, ChildComponent2 is re-rendering every time when Root(Parent) Component is rendering.  
const ChildComponent2 = React.memo(({ updateCount }) => {
  console.log(" ChildComponent 2: RENDER !!");
  return (
    <div style={{ border: '1px solid black', marginTop: '20px' }}>
      <h1>ChildComponent2</h1>
      <h5>I am NOT re-rendering !! Because I am wrapped with React.memo AND my props does not change.</h5>
    </div>
  )
})

export default (ChildComponent2);