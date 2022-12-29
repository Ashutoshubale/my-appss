function App () {
  let project = "Counter Application";
  let btnvalue = "click me"
return (
    <div>
      <h1> Counter Application Static </h1>
      <h1> {project} </h1>
      <input type = "button" value={btnvalue  } />
    </div>
  );
}
export default App;