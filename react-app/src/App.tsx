import ListGroup from "./components/ListGroup/";

function App() {
  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={["Red", "Green"]}
        heading="Test"
        onSelectItem={() => console.log("clicked")}
      />
    </div>
  );
}

export default App;
