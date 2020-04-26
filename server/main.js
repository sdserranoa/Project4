import { Meteor } from 'meteor/meteor';
import { Orders } from '../imports/api/orders.js';
import { Meals } from '../imports/api/meals';
import mealsMock from './mocks/mealsMock';


Meteor.startup(() => {
  // code to run on server at startup
  Meals.remove({});

  if (Meals.find({}).count() === 0) {
    mealsMock.forEach(e => {
      Meals.insert(e)
    })
  };

  if (Orders.find().count() === 0) {
    console.log("There are no orders");
    let dummyOrders = [
      {
        id: 1,
        userName: "Mariela Garcia",
        userId: 1,
        address: "Calle 1 Carrera 1",
        total: 20000,
        state: true
      },
      {
        id: 2,
        userName: "Juan Gonzales",
        userId: 2,
        address: "Calle 1 Carrera 1",
        total: 20000,
        state: false
      },
      {
        id: 3,
        userName: "Juan Gonzales",
        userId: 2,
        address: "Calle 1 Carrera 1",
        total: 20000,
        state: false
      },
      {
        id: 4,
        userName: "Juan Gonzales",
        userId: 2,
        address: "Calle 1 Carrera 1",
        total: 20000,
        state: true
      },
    ];

    dummyOrders.forEach(e => {
      Orders.insert(e);
    })
  }
});
