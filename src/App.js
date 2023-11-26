import "./App.css";
import { Button } from "flowbite-react";

function App() {
  return (
    <div className="App">
      <div className="flex flex-wrap gap-2">
        <Button color="blue">Blue</Button>
        <Button color="gray">Gray</Button>
        <Button color="dark">Dark</Button>
        <Button color="light">Light</Button>
        <Button color="success">Success</Button>
      </div>
    </div>
  );
}

export default App;
