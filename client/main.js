import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Index from "../imports/ui/Index.js";


Meteor.startup(() => {
  render(<Index />, document.getElementById("root"));
});


