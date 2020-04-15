import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./imports/ui/Home.js";

 
Meteor.startup(() => {
  render(<Home />, document.getElementById("root"));
});