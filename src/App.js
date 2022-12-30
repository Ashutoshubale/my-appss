import { useState } from "react";
//statefull counter 
function App () {
  //in counter 100 is stored and 

  //  setCounter Increment the the 100 value to 101 102 and so onn
  let [counter, setCounter] = useState(100 );
console.log(counter);

let increment = () => {
  counter = counter + 1;

  //RE-RENDER
  setCounter(counter);
};

  return (
    <div>
      <h1>  Counter Application </h1>
      <h1>{counter}</h1>
      <input type="button" value = "Increment" onClick={increment}/>
    </div>
  );
}
export default App;
