
import React from 'react';
 import Dog from './Dog';
function App() {
  const data={"name":"hello"};
  return (
    
    <div className="App">
    <h1>FORM</h1>
    <h1>firstname is: {data.name} </h1>
     <Dog /> 
        
    </div>
    
  );
}

export default App;
