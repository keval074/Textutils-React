// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Alert from "./Components/Alert";
import TextForm from "./Components/TextForm";
// import About from "./Components/About";
// import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

//note :- here we are commenting out the react - routrer -dom as it does'nt work properly on github pages as we are now uploading our webpage 

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled", "success");
    }
  };
  return (
    <>
    {/* <Router> */}
      <Navbar
        title="Textutils"
        abouttext="AboutTextutils"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-4">
        {/* <Switch>
          here react always do partial matching if we want the the accurate matching then we should always use the "exact" before path---it is a good practise
          <Route exact path="/about"> 
            <About />
          </Route>
          <Route exact path="/"> */}
            <TextForm
              heading="Please enter the text to analyze below!"
              mode={mode}
              showAlert={showAlert}
            />
          {/* </Route>
        </Switch> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
