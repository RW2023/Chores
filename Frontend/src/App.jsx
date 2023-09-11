import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

// Import your page components
import Home from "./routes/Home";
import Login from "./routes/Login";
import Register from "./routes/Register";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Here you can place a Header component or any global UI elements */}

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          {/* Add more Routes here as needed */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
