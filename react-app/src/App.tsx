import ListGroup from "./components/ListGroup/";
import "./App.css";

function App() {
  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={["Red", "Green"]}
        heading="Test"
        onSelectItem={() => handleSelectedItem}
      />
    </div>
  );
}

export default App;
