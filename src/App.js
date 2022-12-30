function App () {

  // Data Members
  let project = "Counter Application";
  let btnvalue = "click me"

  //Member :: Type is Functions 
  let clickMe = () => alert("ky mug kasa kay bara ahe na ");
  let increment = () => {};
  let decrement = () => {};

  //JSX
return (
    <div>
      <h1> Counter Application Static </h1>
      <h1> {project} </h1>
      <input type = "button" value={btnvalue} onClick = {clickMe}/>
      <input type="button" value="Increment" onClick={increment}/>
    </div>
  );
}
export default App;