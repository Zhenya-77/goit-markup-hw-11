// "use strict";

// function makeOrder(items, pricePerItem) {
//   const totalPrice = items * pricePerItem;
//   return `You bought ${items} items for ${totalPrice} dollars!`;
// }

// console.log(makeOrder(4, 250)); // "You bought 4 items for 1000 dollars!"
// console.log(makeOrder(2, 500)); // "You bought 2 items for 1000 dollars!"
// console.log(makeOrder(6, 100)); // "You bought 6 items for 600 dollars!"

// function getDeliveryInfo(city, productPrice, deliveryCost) {
//   return `Delivery to ${city} will cost ${productPrice + deliveryCost} dollars`;
// }

// console.log(getDeliveryInfo("Kyiv", 200, 50)); // "Delivery to Kyiv will cost 250 dollars"
// console.log(getDeliveryInfo("Lviv", 150, 30)); // "Delivery to Lviv will cost 180 dollars"
// console.log(getDeliveryInfo("Odessa", 300, 70)); // "Delivery to Odessa will cost 370 dollars"

// function calculateBoxSize(content, padding, border) {
//   const contentValue = Number.parseFloat(content);

//   const paddingValue = Number.parseFloat(padding);

//   const borderValue = Number.parseFloat(border);

//   const totalSize = contentValue + paddingValue * 2 + borderValue * 2;

//   return totalSize;
// }

// console.log(calculateBoxSize("40px", "10px", "5px")); // 70
// console.log(calculateBoxSize("100px", "20px", "10px")); // 160
// console.log(calculateBoxSize("80px", "5px", "2px")); // 94

// function calculateTotalHeight(height, padding, border) {
//   return (
//     Number.parseFloat(height) +
//     Number.parseFloat(padding) * 2 +
//     Number.parseFloat(border) * 2
//   );
// }

// console.log(calculateTotalHeight("50px", "10px", "5px")); // 80
// console.log(calculateTotalHeight("100px", "20px", "10px")); // 160
// console.log(calculateTotalHeight("75px", "5px", "2.5px")); // 90

// function calcBMI(weight, height) {
//   const bmi =
//     Number.parseFloat(weight.replace(",", ".")) /
//     Number.parseFloat(height) ** 2;
//   return Number.parseFloat(bmi.toFixed(1));
// }

// const bmi = calcBMI("74,4", "1.68");
// console.log(bmi);
