import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>
          Hello World<strong> Passing html text to child component</strong>
        </Alert>
      )}
      {/* forced to provide only (property) Props.buttonColor: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" */}
      <Button buttonColor="primary" onClick={() => setAlertVisible(true)}>
        <strong>This is bold text button using html</strong>
      </Button>
    </div>
  );
}

export default App;
