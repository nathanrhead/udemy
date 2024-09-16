'use strict';
/*
  Unique to TS, enums allow for the defining of a set of named constants (with numeric or string values), e.g., "pending," "shipped," or "delivered".
  It actually creates code in JavaScript, an effect that the TS community is moving away from.

  There is a debate around enums about their real utility. They're not that commonly used. They do provide autocomplete, where an object may not.
*/
// Numeric enums.
var ReponsesNumeric;
(function (ReponsesNumeric) {
    ReponsesNumeric[ReponsesNumeric["no"] = 0] = "no";
    ReponsesNumeric[ReponsesNumeric["yes"] = 1] = "yes";
    ReponsesNumeric[ReponsesNumeric["maybe"] = 2] = "maybe";
})(ReponsesNumeric || (ReponsesNumeric = {}));
;
//String enums.
var ResponsesString;
(function (ResponsesString) {
    ResponsesString["no"] = "No";
    ResponsesString["yes"] = "Yes";
    ResponsesString["maybe"] = "Maybe";
})(ResponsesString || (ResponsesString = {}));
;
// Other examples,
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["PENDING"] = 0] = "PENDING";
    OrderStatus[OrderStatus["SHIPPED"] = 1] = "SHIPPED";
    OrderStatus[OrderStatus["DELIVERED"] = 2] = "DELIVERED";
    OrderStatus[OrderStatus["RETURNED"] = 3] = "RETURNED"; //    "       "       "    = 3
})(OrderStatus || (OrderStatus = {}));
;
const myStatus = OrderStatus.DELIVERED;
function isDelivered(status) {
    return status === OrderStatus.DELIVERED;
}
// The first enum's value can be reassigned, and the following will automatically be reassigned, as well. They can also all be assigned a number manually.
var OrderStatusCustom;
(function (OrderStatusCustom) {
    OrderStatusCustom[OrderStatusCustom["PENDING"] = 14] = "PENDING";
    OrderStatusCustom[OrderStatusCustom["SHIPPED"] = 15] = "SHIPPED";
    OrderStatusCustom[OrderStatusCustom["DELIVERED"] = 16] = "DELIVERED";
    OrderStatusCustom[OrderStatusCustom["RETURNED"] = 17] = "RETURNED"; // assigned number = 17
})(OrderStatusCustom || (OrderStatusCustom = {}));
;
// The values can be set as strings, too. Or mixed. Though, typically, the values' type is the same.
var OrderStatusStrings;
(function (OrderStatusStrings) {
    OrderStatusStrings["PENDING"] = "Pending";
    OrderStatusStrings["SHIPPED"] = "Shipped";
    OrderStatusStrings["DELIVERED"] = "Delivered";
    OrderStatusStrings["RETURNED"] = "Returned";
    OrderStatusStrings[OrderStatusStrings["ERROR"] = 500] = "ERROR";
})(OrderStatusStrings || (OrderStatusStrings = {}));
;
const order = {
    orderNumber: 12345678,
    status: 0 /* OrderStatusNoJS.PENDING */
};
// In JS, order.status will equal 0 and order will look like this:
const order1 = {
    orderNumber: 12345678,
    status: 0 /* OrderStatus.PENDING */
};
