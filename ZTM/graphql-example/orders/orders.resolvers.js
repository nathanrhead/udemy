'use strict';

const ordersModel = require('./orders.model');
module.exports = {
  Query: {
    orders: async () => { 
      const orders = await ordersModel.getAllOrders();
      console.log({orders});
      return orders;
    }
  }
}