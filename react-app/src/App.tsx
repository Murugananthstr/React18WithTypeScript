import "./App.css";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import Button from "./components/Button/Button";

function App() {
  return (
    <div>
      <BsFillCalendarCheckFill size="140" color="green" />
      <Button
        buttonColor="primary"
        children="Fancy Button"
        onClick={() => console.log("clicked")}
      />
    </div>
  );
}

export default App;
