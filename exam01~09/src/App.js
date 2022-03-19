import Counter from './Counter';
import Counter2 from './Counter2';
import Info from './Info';
import Info2 from './Info2';
import Average from './Average';
import Average2 from './Average2';
import Average3 from './Average3';
import React, { useState } from "react";

function App() {
  const [ visible, setVisible ] = useState(false);

  return (
    <>
      <Counter /> 
      <hr/>
      <div>
          <button onClick={() => {
              setVisible(!visible)}
          }>
              {visible ? "숨기기" : "보이기" }
          </button>
          <hr/>
          {visible && <Info />} 
      </div> 
      <hr/>
      <Counter2 /> 
      <hr/>
      <Info2 />
      <hr/> 
      <Average />
      <hr/> 
      <Average2 />
      <hr/> 
      <Average3 />
    </>
  );
}

export default App;
