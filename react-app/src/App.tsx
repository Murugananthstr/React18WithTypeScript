import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <Alert>
        Hello World<strong> Passing html text to child component</strong>
      </Alert>
      {/* forced to provide only (property) Props.buttonColor: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" */}
      <Button buttonColor="primary" onClick={() => console.log("Clicked")}>
        <strong>This is bold text button using html</strong>
      </Button>
      <Button buttonColor="secondary" onClick={() => console.log("Clicked")}>
        <s>This is second button text</s>
      </Button>
    </div>
  );
}

export default App;
