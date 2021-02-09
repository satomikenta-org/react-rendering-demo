import { useCallback, useState } from "react";
import ChildComponent1 from './components/ChildComponent1';
import ChildComponent2 from './components/ChildComponent2';

function App() {
  const [ someLocalState1, setSomeLocalState1 ] = useState(0);
  const [ count, setCount ] = useState(0);

  // if not wrap updateCount function with useCallback, 
  // updateCount function is re-created(new refference) every rendering. 
  // => ChildComponent2 is re-rendering even when wrapping ChildComponent2 with React.memo. 
  const updateCount = useCallback(() => {
    setCount(old => old + 1);
  }, []);

  console.log(" ROOT : RENDER ");
  return (
    <div className="App">
      <h1>Root Component</h1>
      <button onClick={() => setSomeLocalState1(old => old + 1)}>Let's change Root Component's State!!</button>
      <br/>
      <p></p>
      <button onClick={() => updateCount(old => old + 1)}>UPDATE COUNT</button>
      <ChildComponent1 count={count}/>
      <ChildComponent2 updateCount={updateCount}/>
    </div>
  );
}

export default App;
