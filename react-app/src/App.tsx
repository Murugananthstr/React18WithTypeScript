import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <Alert>
        Hello World<strong> Passing html text to child component</strong>
      </Alert>
      {/* forced to provide only (property) Props.buttonColor: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" */}
      <Button buttonColor="primary">This is reusable text</Button>
      <Button buttonColor="secondary">This is second button text</Button>
    </div>
  );
}

export default App;
