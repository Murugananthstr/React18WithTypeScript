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
  return (
    <div>
      <ListGroup items={countries} heading="Name of the Countries" />
      <ListGroup items={["Red", "Blue", "Green"]} heading="Name of the Color" />
    </div>
  );
}

export default App;
