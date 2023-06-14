import ListGroup from "./components/ListGroup";

function App() {
  const countries = [
    "Newyork",
    "Toranto",
    "Sanfransico",
    "Australia",
    "Newzland",
    "India",
  ];

  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={countries}
        heading="Name of the Countries"
        onSelectItem={handleSelectedItem}
      />
      <ListGroup
        items={["Red", "Blue", "Green"]}
        heading="Name of the Color"
        onSelectItem={handleSelectedItem}
      />
    </div>
  );
}

export default App;
