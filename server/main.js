import { Meteor } from 'meteor/meteor';
import { Orders } from '../imports/api/orders.js';
import { Meals } from '../imports/api/meals';
import mealsMock from './mocks/mealsMock';


Meteor.startup(() => {
  // code to run on server at startup
  Meals.remove({})
  console.log(Meals.find({}).count())
  if (Meals.find({}).count() === 0) {
    mealsMock.forEach(e => {
      Meals.insert(e)
    })
  }
});
