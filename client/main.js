import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
 
import WeekForecast from "../imports/ui/WeekForecast.js";
 
Meteor.startup(() => {
  render(<WeekForecast />, document.getElementById("root"));
});