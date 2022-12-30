function App () {
//stateless variable becouse the state is not changing in UI
  
//data member
let counter = 100;


// memeber functions
  let increment = () => {
  counter = counter + 1;
  console.log(counter);
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
