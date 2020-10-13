import React from "react";
// import logo from './logo.svg';
// import './App.css';
// import Dash from "./components/Dash";
// import Login from "./components/Login";
// import Gtry from "./components/Gtry";
import Home from "./pages/Home";
import Bsc from "./pages/BSC Nursing";
import ILETS from "./pages/IELTS Exam Registration";
import Medical from "./pages/Medical Education";
import Stech from "./pages/Science & Technology";
import Study from "./pages/Study Abroad";
import Test from "./pages/Test Preparation";
import Vision from "./pages/vision";
import Why from "./pages/whyus";
import Work from "./pages/work";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <div className="App">
     
      <Router>
     <Switch>
          {/* <Route exact path="/dash" component={Dash} />
          <Route exact path="/l" component={Login} />
          <Route exact path="/g" component={Gtry} /> */}
          
          <Route exact path="/" component={Home} />
          <Route exact path="/v" component={Vision} />
          <Route exact path="/w" component={Work} />
          <Route exact path="/why" component={Why} />
          <Route exact path="/Medical" component={Medical} />
          <Route exact path="/Bsc" component={Bsc} />
          <Route exact path="/ILETS" component={ILETS} />
          <Route exact path="/Stech" component={Stech} />
          <Route exact path="/Test" component={Test} />
          <Route exact path="/Study" component={Study} />
        </Switch>
        </Router>
    </div>
  );
}

export default App;
