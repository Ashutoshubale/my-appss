import { useState } from "react";



function App () {
let str1 = "Home";
let str2 = "Explore";
let str3 = "Notification";
//let counter = 1;

let [counter,setCounter] = useState(1);

//let city = "Mumbai"
let [city, setCity] = useState("Mumbai");
let ChangeCity = () => {
  city = "Hello" + city;
  setCity(city);
};

let increment = () => {
  //logical part
counter++;
console.log(counter);

// DOM Update Part.
setCounter(counter);

};

return (
  <div>
    <h1>{city}</h1>
    <input type="button" value="Change City" onClick = {ChangeCity}/>

    <hr/>
    <h1>{str1}</h1>
    <h1>{str2}</h1>
    <h1>{str3}</h1>
    <h1>{counter}</h1>
    <input type = "button" value="Increment" onClick = {increment} />
  </div>
 );
}

export default App;
