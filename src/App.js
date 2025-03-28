import "./App.css";
import Form from "./Form";
import Header from "./Header";
import PopUpMsg from "./PopUpMsg";
import { useState } from "react";

function App() {
  const [msg, setMsg] = useState(null);
  const [isVisible, setIsVisible] = useState(null);

  return (
    <div className="App">
      <Header title="Loan Request" />
      <Form setIsVisible={setIsVisible} setMsg={setMsg} />
      <PopUpMsg setIsVisible={setIsVisible} msg={msg} isVisible={isVisible} />
    </div>
  );
}

export default App;
