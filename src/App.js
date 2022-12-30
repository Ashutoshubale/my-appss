import { useState } from "react";

function App () {
  // useState,hooks,Statefull variabale
  // De-Structureing

let [counter, setCounter ] = useState(100);

//member function,
//Arrow function
// how calling this function 
//react binding + using interpolation
let increment = () => {

  //logic operation
  counter++;

  //dom
  setCounter(counter);
};
return(

  <div>
    <h1>Counter Application</h1>
    <h1>{counter}</h1>
    <input type= "button" value = "Increment" onClick = {increment}/>
  </div>
 );
}

export default App;
