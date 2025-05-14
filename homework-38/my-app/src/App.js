import './App.css';
import Button, {Text} from "./components/Button";

function App() {
  return (
    <div className="app">
<Button text={Text.ClickUp} onClick={(()=>alert("click up"))}></Button>
        <Button text={Text.ClickDown} onClick={(()=>alert("click down"))}></Button>

    </div>
  );
}

export default App;
