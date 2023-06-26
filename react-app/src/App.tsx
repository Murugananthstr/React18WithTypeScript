import "./App.css";
import { useState } from "react";

function App() {
  //React updates the state asynchronously meaning here the line no 13 setVisibility(true) is setting visibility value to true,
  // but you can still see the concole.log(visibility) will display as false for the first time because it updates the state asynchronously
  // Why because to have better performance, example if you try to set the many state using hooks due to many rerendering it will take lot of time,
  // to avoid this scenario, react will create batches to update all the state in single short.

  const [isVisibility, setVisibility] = useState(false);

  const handleClick = () => {
    setVisibility(true);
    console.log(isVisibility);
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
