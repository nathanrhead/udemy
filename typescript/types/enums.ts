'use strict'

/* 
  Unique to TS, enums allow for the defining of a set of named constants (with numeric or string values), e.g., "pending," "shipped," or "delivered".
  It actually creates code in JavaScript, an effect that the TS community is moving away from.

  There is a debate around enums about their real utility. They're not that commonly used. They do provide autocomplete, where an object may not.
*/

// Numeric enums.
enum ReponsesNumeric {
  no,
  yes,
  maybe
};

//String enums.
enum ResponsesString {
  no = 'No',
  yes = 'Yes',
  maybe = 'Maybe'
};

// Other examples,
enum OrderStatus {
  PENDING, // default assigned number = 0
  SHIPPED, //    "       "       "    = 1
  DELIVERED, //  "       "       "    = 2
  RETURNED //    "       "       "    = 3
};

const myStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus) {
  return status === OrderStatus.DELIVERED;
}

// The first enum's value can be reassigned, and the following will automatically be reassigned, as well. They can also all be assigned a number manually.
enum OrderStatusCustom {
  PENDING = 14, // assigned number = 14
  SHIPPED, // assigned number = 15
  DELIVERED, // assigned number = 16
  RETURNED // assigned number = 17
};

// The values can be set as strings, too. Or mixed. Though, typically, the values' type is the same.
enum OrderStatusStrings {
  PENDING = 'Pending',
  SHIPPED = 'Shipped',
  DELIVERED = 'Delivered',
  RETURNED = 'Returned',
  ERROR = 500
};

/* To avoid TS creating a whole function in JS out of the enum when it is compiled, the "const" keyword can be used.

(1) What the OrderSTatus enum compiles to in JS.
  "use strict";
  var OrderStatus;
  (function (OrderStatus) {
      OrderStatus[OrderStatus["PENDING"] = 0] = "PENDING";
      OrderStatus[OrderStatus["SHIPPED"] = 1] = "SHIPPED";
      OrderStatus[OrderStatus["DELIVERED"] = 2] = "DELIVERED";
      OrderStatus[OrderStatus["RETURNED"] = 3] = "RETURNED";
  })(OrderStatus || (OrderStatus = {}));

(2) What the const enum OrderStatus compiles to in JS: '';

*/

const enum OrderStatusNoJS {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED
}

const order  = { 
  orderNumber: 12345678,
  status: OrderStatusNoJS.PENDING
};

// In JS, order.status will equal 0 and order will look like this:

const order1 = {
    orderNumber: 12345678,
    status: 0 /* OrderStatus.PENDING */
  };

