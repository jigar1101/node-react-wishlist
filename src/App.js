import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import Wishlist from "./Wishlist";

const App = () => (
  <div>
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/wishlist" component={Wishlist} />
    </main>
  </div>
);

export default App;
