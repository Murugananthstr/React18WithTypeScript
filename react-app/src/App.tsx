import "./App.css";
import { useState } from "react";

function App() {
  // Hooks has to be used as top level of your components,
  // it maintains array similar to the array like [false, true] and assign back the value to isVisbility and approved variables in sequence
  // Since it is maintaning and assigning in sequence we should not change the order, hence we should not use if conditions and for condition for state hooks
  const [isVisibility, setVisibility] = useState(false);
  const [approved, setApproved] = useState(true);
  let count = 0; // this variable is local to the scope whereas state is stored outside of the components

  const handleClick = () => {
    setVisibility(true);
    count++;
    console.log(isVisibility);
    console.log(count);
  };

  return (
    <div>
      {/* <BsFillCalendarCheckFill size="140" color="green" /> */}
      <button onClick={handleClick}>
        React Update the state as Asynchronously
      </button>
    </div>
  );
}

export default App;
