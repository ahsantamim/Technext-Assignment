import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CardView from "./component/CardView";
import UserDetailsPage from "./component/UserDetailsPage";

const App = () => {
  return (
    <Router>
      <div>
        {/* Define routes */}
        <Switch>
          <Route path="/" exact component={CardView} />
          <Route path="/user/:id" component={UserDetailsPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
