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

// const start = 5;
// const end = 15;
// let number = 0;

// for (let i = start; i < end; i++) {
//   if (i % 2 !== 0 && i % 3 === 0) {
//     number = i;
//     break;
//   }
// }

// console.log(number);

// function makeTransaction(quantity, pricePerDroid, customerCredits) {
//   let total = quantity * pricePerDroid;
//   let message;
//   if (total > customerCredits) {
//     message = `Insufficient funds!`;
//   } else {
//     message = `You ordered ${quantity} droids worth ${total} credits!`;
//   }
//   return message;
// }

// console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
// console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
// console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"

// function formatMessage(message, maxLength) {
//   if (message.length <= maxLength) {
//     return message;
//   } else {
//     return `${message.slice(0, maxLength)}...`;
//   }
// }

// console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
// console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
// console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
// console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"

// function checkForSpam(message) {
//   let text = message.toLowerCase();
//   return text.includes("spam") || text.includes("sale");
// }

// console.log(checkForSpam("Latest technology news")); // false
// console.log(checkForSpam("JavaScript weekly newsletter")); // false
// console.log(checkForSpam("Get best sale offers now!")); // true
// console.log(checkForSpam("Amazing SalE, only tonight!")); // true
// console.log(checkForSpam("Trust me, this is not a spam message")); // true
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

// function getShippingCost(country) {
//   let price;
//   let text;

//   switch (country) {
//     case "China":
//       price = 100;
//       text = `Shipping to ${country} will cost ${price} credits`;
//       break;
//     case "Chile":
//       price = 250;
//       text = `Shipping to ${country} will cost ${price} credits`;
//       break;
//     case "Australia":
//       price = 170;
//       text = `Shipping to ${country} will cost ${price} credits`;
//       break;
//     case "Jamaica":
//       price = 120;
//       text = `Shipping to ${country} will cost ${price} credits`;
//       break;

//     default:
//       text = `Sorry, there is no delivery to your country`;
//   }

//   return text;
// }

// console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
// console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
// console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
// console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
// console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"

// let i = 0;
// while (i < 10) {
//   i += 1;
//   console.log(i);
// }

// const arr = [];

// for (let i = 0; i < 1000000; i++) {
//   arr.push(i + 100);
// }

// function binaryNumber(array, value) {
//   let start = 0;
//   let end = array.length - 1;

//   while (start <= end) {
//     console.count("counter");
//     const mid = Math.floor((start + end) / 2);
//     if (array[mid] === value) {
//       return mid;
//     }
//     if (array[mid] < value) {
//       start = mid + 1;
//     } else if (array[mid] > value) {
//       end = mid - 1;
//     }
//   }

//   return null;
// }

// console.log(binaryNumber(arr, 125));

// console.log(arr);

// function findNumber(array, value) {
//   for (let i = 0; i < array.length; i++) {
//     console.count("counter");
//     if (array[i] === value) {
//       return i;
//     }
//   }
//   return null;
// }

// console.log(findNumber(arr, 100000));

// function slugify(title) {
//   const slg = title.toLowerCase().split(" ").join("-");
//   return slg;
// }

// console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
// console.log(slugify("English for developer")); // "english-for-developer"
// console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"

// function makeArray(firstArray, secondArray, maxLength) {
//   const newArr = firstArray.concat(secondArray);
//   const arr = [];

//   for (let i = 0; i < newArr.length; i++) {
//     if (arr.length < maxLength) {
//       arr.push(newArr[i]);
//     }
//     if (arr.length === maxLength) {
//       break;
//     }
//   }
//   return arr;
// }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []

// function filterArray(numbers, value) {
//   const arr = [];

//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > value) {
//       arr.push(numbers[i]);
//     }
//   }
//   return arr;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

// function calculateTotal(numbers) {
//   let total = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     total += numbers[i];
//   }
//   return total;
// }

// function findSmallestNumber(numbers) {
//   let min;
//   min = numbers[0];
//   for (let i = 0; i < numbers.length; i++) {
//     if (min > numbers[i]) {
//       min = numbers[i];
//     }
//   }
//   return min;
// }

// function getEvenNumbers(numbers) {
//   const arr = [];

//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//       arr.push(numbers[i]);
//     }
//   }
//   return arr;
// }

// function countGreaterThan(numbers, value) {
//   let count = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > value) {
//       count += 1;
//     }
//   }

//   return count;
// }

// function findFirstGreater(numbers, value) {
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > value) {
//       return numbers[i];
//     }
//   }
//   return null;
// }

// function reverseArray(numbers) {
//   const arr = [];

//   for (let i = numbers.length - 1; i >= 0; i--) {
//     arr.push(numbers[i]);
//   }

//   return arr;
// }

// function getBigNumbersLimited(numbers, value, limit) {
//   const arr = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > value) {
//       arr.push(numbers[i]);
//     }
//   }

//   return arr.slice(0, limit);
// }

// function findLongestWord(words) {
//   let lognWord = words[0];
//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length > lognWord.length) {
//       lognWord = words[i];
//     }
//   }
//   return lognWord;
// }

// function countVowels(string) {
//   let value = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (
//       string[i] === "a" ||
//       string[i] === "e" ||
//       string[i] === "i" ||
//       string[i] === "o" ||
//       string[i] === "u"
//     ) {
//       value++;
//     }
//   }

//   return value;
// }

// function reverseString(string) {
//   let text = "";

//   for (let i = string.length - 1; i >= 0; i--) {
//     text += string[i];
//   }

//   return text;
// }

// function isPalindrome(string) {
//   let text = "";

//   for (let i = string.length - 1; i >= 0; i--) {
//     text += string[i];
//   }

//   return text === string;
// }

// function countWords(string) {
//   const value = string.split(" ");
//   return value.length;
// }

// function getUniqueNumbers(numbers) {
//   const arr = [1, 2];

//   for (let i = 0; i < numbers.length; i++) {
//     let isDuplicate = false;

//     for (let y = 0; y < arr.length; y++) {
//       if (arr[y] === numbers[i]) {
//         isDuplicate = true;
//       }
//     }

//     if (!isDuplicate) {
//       arr.push(numbers[i]);
//     }
//   }

//   return arr;
// }

// const arr = [1, 2, 2, 3];

// const numbers = [3, 7, 2, 9, 5];
// const evenNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     evenNumbers.push(numbers[i]);
//   }
// }

// console.log(evenNumbers);

// const fruits = ["apple", "banana", "orange"];

// for (const value of fruits) {
//   console.log(`I like ${value}`);
// }

// const colors = ["red", "green", "blue"];

// console.log(colors.indexOf("green"));
// console.log(colors.indexOf("black"));

// const words = ["Hello", "world"];

// console.log(words.join(" "));

// const sentence = "I love JavaScript";

// console.log(sentence.split(" "));

// const str = "JavaScript";

// console.log(str.slice(0, 4));
// console.log(str.slice(4));

// const names = "Anna, Ivan, Oleg, Petro";

// const arr = names.split(", ");

// for (const element of arr) {
//   if (element.includes("a")) {
//     console.log(element);
//   }
// }

// const numbers = [10, 20, 30, 40];

// console.log(numbers.join("-"));

// const words = ["apple", "banana", "grape"];
// let value;
// let inx;
// for (let i = 0; i < words.length; i++) {
//   if (words[i].includes("an")) {
//     value = words[i];
//     inx = words.indexOf(words[i]);
//   }
// }
// console.log(value);
// console.log(inx);

// const data = "Anna, Ivan, Oleg, Petro, Andrii";

// const arr = data.split(", ");

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i].toLowerCase().includes("a") && arr[i].length >= 4) {
//     console.log(arr[i]);
//   }
// }

// const arr = [5, 2, 1, 3, 4];

// for (let y = 0; y < arr.length - 1; y++) {
//   let isSwapped = false;
//   for (let i = 0; i < arr.length - 1; i++) {
//     console.count("counter");
//     if (arr[i] > arr[i + 1]) {
//       const temp = arr[i];
//       arr[i] = arr[i + 1];
//       arr[i + 1] = temp;
//       isSwapped = true;
//     }
//   }

//     if (!isSwapped) {
//       break;
//     }
// }

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   arr[i] += 1;
// }

// for (let element of arr) {
//   const index = arr.indexOf(element);
//   console.log(index);
//   arr[index] += 1;
// }

// console.log(arr);

// function toCapitalizeCase(string) {
//   const words = string.split(" ");
//   let capitalizeWords = [];
//   console.log(words);
//   for (let i = 0; i < words.length; i++) {
//     let newString = "";

//     newString += words[i][0].toUpperCase();
//     newString += words[i].slice(1).toLowerCase();
//     capitalizeWords.push(newString);
//   }
//   return capitalizeWords.join(" ");
// }

// console.log(toCapitalizeCase("hello world"));

// Напиши функцію
// getAllPropValues(propName), яка приймає один параметр propName - ім'я (ключ) властивості. Функція повинна повернути масив усіх значень властивості з таким ім'ям з кожного об'єкта в масиві products.
// Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути порожній масив.

// Оголошена функція getAllPropValues(propName)
// Виклик getAllPropValues("name") повертає ["Radar", "Scanner", "Droid", "Grip"]
// Виклик getAllPropValues("quantity") повертає [4, 3, 7, 9]
// Виклик getAllPropValues("price") повертає [1300, 2700, 400, 1200]
// Виклик getAllPropValues("category") повертає []

// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   const arr = [];

//   for (const product of products) {
//     if (product[propName]) {
//       arr.push(product[propName]);
//     }
//   }
//   return arr;
// }
// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("category"));

// Напиши функцію isEnoughCapacity(products, containerSize), яка обчислює, чи помістяться всі товари в контейнер при пакуванні.

// Функція оголошує два параметри:

// products — об’єкт, у якому ключі містять назви товарів, а їхні значення — кількість цих товарів. Наприклад, { apples: 2, grapes: 4 }.
// containerSize — число, максимальна кількість одиниць товарів, яку в себе може вмістити контейнер.
// Функція має повернути результат перевірки, чи помістяться всі товари в контейнер. Тобто порахувати загальну кількість товарів в об’єкті products і повернути true, якщо вона менше або дорівнює containerSize, і false, якщо ні.

// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її викликів.

// console.log(
//   isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
// ); // true

// console.log(
//   isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
// ); // false

// console.log(
//   isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
// ); // true

// console.log(
//   isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
// ); // false

// function isEnoughCapacity(products, containerSize) {
//   const arr = Object.values(products);
//   let sum = 0;
//   for (const item of arr) {
//     sum += item;
//   }
//   return sum <= containerSize;
// }

// isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8);
// isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12);
// isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14);
// isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7);
// function calcAverageCalories(days) {
//   if (!days.length) {
//     return 0;
//   }

//   let sum = 0;

//   for (const day of days) {
//     sum += day.calories;
//   }
//   return sum / days.length;
// }

// console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 3010 },
//     { day: "tuesday", calories: 3200 },
//     { day: "wednesday", calories: 3120 },
//     { day: "thursday", calories: 2900 },
//     { day: "friday", calories: 3450 },
//     { day: "saturday", calories: 3280 },
//     { day: "sunday", calories: 3300 },
//   ])
// ); // 3180

// console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 2040 },
//     { day: "tuesday", calories: 2270 },
//     { day: "wednesday", calories: 2420 },
//     { day: "thursday", calories: 1900 },
//     { day: "friday", calories: 2370 },
//     { day: "saturday", calories: 2280 },
//     { day: "sunday", calories: 2610 },
//   ])
// ); // 2270

// console.log(calcAverageCalories([])); // 0

// const profile = {
//   username: "Jacob",
//   playTime: 300,
//   changeUsername(newName) {
//     this.username = newName;
//   },
//   updatePlayTime(hours) {
//     this.playTime += hours;
//   },
//   getInfo() {
//     return `${this.username} has ${this.playTime} active hours!`;
//   },
// };

// function countTotalPrice(products) {
//   const arr = Object.values(products);
//   let total = 0;
//   for (const a of arr) {
//     total += a;
//   }
//   return total;
// }

// function getProductNames(products) {
//   const arr = Object.keys(products);
//   return arr;
// }

// function getTotalQuantity(products) {
//   const arr = Object.values(products);
//   let total = 0;
//   for (const a of arr) {
//     total += a;
//   }

//   return total;
// }

// function findLongestName(names) {
//   let longest = names[0];

//   for (let i = 1; i < names.length; i++) {
//     if (longest.length < names[i].length) {
//       longest = names[i];
//     }
//   }
//   return longest;
// }

// function filterArray(numbers, value) {
//   const arr = [];
//   for (const number of numbers) {
//     if (number > value) {
//       arr.push(number);
//     }
//   }
//   return arr;
// }

// function getCommonElements(arr1, arr2) {
//   const arr = [];
//   for (const a of arr1) {
//     if (arr2.includes(a)) {
//       arr.push(a);
//     }
//   }

//   return arr;
// }

// function getEvenNumbers(start, end) {
//   const arr = [];
//   for (let i = start; i <= end; i++) {
//     if (i % 2 === 0) {
//       arr.push(i);
//     }
//   }
//   return arr;
// }

// const getUserNames = (users) => users.map((user) => user.name);

// const getUsersWithFriend = (users, friendName) => {
//   return users.filter((user) => user.friends.includes(friendName));
// };

// const sortByDescendingFriendCount = (users) =>
//   users.toSorted((a, b) => b.friends.length - a.friends.length);

// const getTotalBalanceByGender = (users, gender) => {
//   return users
//     .filter((user) => user.gender === gender)
//     .reduce((acc, user) => acc + user.balance, 0);
// };

// const getUserEmails = (users) => users.map((user) => user.email);

// const getUsersWithAge = (users, minAge) =>
//   users.filter((user) => user.age >= minAge);

// const getNamesSortedByAge = (users) =>
//   users.toSorted((a, b) => a.age - b.age).map((user) => user.name);

// const getTotalAge = (users) => users.reduce((acc, user) => acc + user.age, 0);

// const getActiveUsers = (users) => users.filter((user) => user.isActive);

// const getInactiveUserNames = (users) =>
//   users.filter((user) => !user.isActive).map((user) => user.name);

// const getAverageAge = (users) =>
//   users.reduce((acc, user) => acc + user.age, 0) / users.length;

// const getUniqueFriends = (users) =>
//   users
//     .flatMap((user) => user.friends)
//     .filter((user, index, array) => array.indexOf(user) === index);

// const getUsersWithFriendCount = (users, minFriends) =>
//   users.filter((user) => user.friends.length >= minFriends);

// const getSortedUniqueSkills = (users) =>
//   users
//     .flatMap((user) => user.skills)
//     .filter((skill, index, array) => array.indexOf(skill) === index)
//     .toSorted((a, b) => a.localeCompare(b));

// const getTopUserByBalance = (users) =>
//   users.reduce(
//     (acc, user) => (user.balance > acc.balance ? user : acc),
//     users[0]
//   );

// const getTotalFriendCount = (users) =>
//   users.reduce((acc, user) => acc + user.friends.length, 0);

// const property = "name";

// const user = {
//   name: "Ivan",
//   age: 20,
//   property,
// };

// console.log(user.property);

// const user2 = {
//   ...user,
//   name: "Alice",
//   age: 23,
//   property: "userName",
// };

// console.log(user2);

// 1. Створи обʼєкт
//

// const operations = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
//   TRANSFER: "transfer",
//   RECIVE_TRANSFER: "recive-transfer",
// };

// const rates = {
//   USD: 1,
//   UAH: 40,
//   EUR: 0.9,
// };

// const wallet = {
//   owner: "Ivan",
//   balance: 1000,
//   currency: "USD",
//   transactions: [],
//   deposit(amount) {
//     const numAmount = Number(amount);

//     if (numAmount <= 0 || isNaN(numAmount)) {
//       console.log("Сумма повина бути більше 0!");
//       return;
//     }

//     this.balance += numAmount;
//     this.transactions.push({
//       type: operations.DEPOSIT,
//       amount: numAmount,
//       date: new Date(),
//     });
//   },

//   withdraw(amount, category = "other") {
//     const numAmount = Number(amount);
//     if (numAmount <= 0 || isNaN(numAmount)) {
//       console.log("Сумма повина бути більше 0!");
//       return;
//     }
//     if (this.balance < numAmount) {
//       console.log("Недостатньо коштів на рахунку!");
//       return;
//     }

//     this.balance -= numAmount;
//     this.transactions.push({
//       type: operations.WITHDRAW,
//       amount: numAmount,
//       date: new Date(),
//       category,
//     });
//   },

//   getTransactionHistory() {
//     return this.transactions;
//   },
//   getBalance() {
//     return this.balance;
//   },
//   transfer(amount, targetWallet) {
//     let numAmount = Number(amount);
//     if (numAmount <= 0 || isNaN(numAmount)) {
//       console.log("Сумма повина бути більше 0!");
//       return;
//     }
//     if (this.balance < numAmount) {
//       console.log("Недостатньо коштів на рахунку!");
//       return;
//     }

//     this.balance -= numAmount;
//     const convertAmount = this.convert(
//       numAmount,
//       this.currency,
//       targetWallet.currency
//     );
//     targetWallet.receiveTransfer(convertAmount, this);
//     this.transactions.push({
//       type: operations.TRANSFER,
//       amount: numAmount,
//       date: new Date(),
//       to: targetWallet.owner,
//     });
//   },

//   receiveTransfer(amount, fromWallet) {
//     const numAmount = Number(amount);
//     if (numAmount <= 0 || isNaN(numAmount)) {
//       console.log("Сумма повина бути більше 0!");
//       return;
//     }

//     this.balance += numAmount;
//     this.transactions.push({
//       type: operations.RECIVE_TRANSFER,
//       amount: numAmount,
//       date: new Date(),
//       from: fromWallet.owner,
//     });
//   },
//   convert(amount, fromCurrency, toCurrency) {
//     if (!rates[fromCurrency] || !rates[toCurrency]) {
//       console.log("Валюта не підтримуєтся");
//       return;
//     }
//     const amountUSD = amount / rates[fromCurrency];
//     const convertedAmount = amountUSD * rates[toCurrency];
//     return Number(convertedAmount.toFixed(2));
//   },

//   getTransactionsByType(type) {
//     return this.transactions.filter((transaction) => transaction.type === type);
//   },

//   getTransactionsByCategory(category) {
//     return this.transactions.filter(
//       (transaction) => transaction.category === category
//     );
//   },
// };

// wallet.deposit(700);
// wallet.deposit(-700);
// wallet.deposit("lalal");

// wallet.withdraw(500);
// wallet.withdraw(1500);
// wallet.withdraw(100, "food");
// wallet.withdraw(100, "games");
// wallet.withdraw(100, "car");
// wallet.withdraw(100, "food");
// console.log(wallet.getTransactionsByType(operations.WITHDRAW));
// console.log(wallet.getTransactionsByCategory("food"));
// // console.log(wallet);

// // wallet2.transfer(200, wallet);
// // console.log(wallet2.convert(100, "USD", "UAH"));
// // console.log(wallet2.convert(100, "KPZ", "SDS"));
// // wallet.transfer(100, wallet2);
// // console.log(wallet);

// // console.log(wallet2);

// // 2. Реалізуй методи
// // 2.1 Поповнення deposit(amount) + запис в історію
// // 2.2 Зняття withdraw(amount) + запис в історію
// // 2.3 Історія операцій getTransactionHistory() - повертає всі транзакції
// // 2.4 Поточний баланс getBalance()
// // 2.5 Переказ на інший гаманець transfer(amount, targetWallet)
// // 2.6 метод для прийняття коштів receiveTransfer(amount, fromWallet)

// // 3. Додатково
// // 3.1 Конвертацію валют convert(amount, fromCurrency, toCurrency), визнач змінні для конвертації
// // const rates = {
// //   USD: 1,
// //   UAH: 40,
// //   EUR: 0.9,
// // };
// // 3.2 Додай перевірку валюти під час переведення коштів, якщо валюти різні то зроби конвертацію.
// // 3.3 Додай категорії витрат withdraw(100, 'food'), нехай по замовчуванню буде other
// // 3.4 Додай фільтрація історії getTransactionsByType(<type>) getTransactionsByCategory(<category>)

// const wallet2 = {
//   owner: "Alice",
//   balance: 1000,
//   currency: "UAH",
//   transactions: [],
//   deposit(amount) {
//     const numAmount = Number(amount);

//     if (numAmount <= 0 || isNaN(numAmount)) {
//       console.log("Сумма повина бути більше 0!");
//       return;
//     }

//     this.balance += numAmount;
//     this.transactions.push({
//       type: operations.DEPOSIT,
//       amount: numAmount,
//       date: new Date(),
//     });
//   },

//   withdraw(amount) {
//     const numAmount = Number(amount);
//     if (numAmount <= 0 || isNaN(numAmount)) {
//       console.log("Сумма повина бути більше 0!");
//       return;
//     }
//     if (this.balance < numAmount) {
//       console.log("Недостатньо коштів на рахунку!");
//       return;
//     }

//     this.balance -= numAmount;
//     this.transactions.push({
//       type: operations.WITHDRAW,
//       amount: numAmount,
//       date: new Date(),
//     });
//   },

//   getTransactionHistory() {
//     return this.transactions;
//   },
//   getBalance() {
//     return this.balance;
//   },
//   transfer(amount, targetWallet) {
//     let numAmount = Number(amount);
//     if (numAmount <= 0 || isNaN(numAmount)) {
//       console.log("Сумма повина бути більше 0!");
//       return;
//     }
//     if (this.balance < numAmount) {
//       console.log("Недостатньо коштів на рахунку!");
//       return;
//     }

//     this.balance -= numAmount;
//     const convertAmount = this.convert(
//       numAmount,
//       this.currency,
//       targetWallet.currency
//     );
//     targetWallet.receiveTransfer(convertAmount, this);
//     this.transactions.push({
//       type: operations.TRANSFER,
//       amount: numAmount,
//       date: new Date(),
//       to: targetWallet.owner,
//     });
//   },

//   receiveTransfer(amount, fromWallet) {
//     const numAmount = Number(amount);
//     if (numAmount <= 0 || isNaN(numAmount)) {
//       console.log("Сумма повина бути більше 0!");
//       return;
//     }

//     this.balance += numAmount;
//     this.transactions.push({
//       type: operations.RECIVE_TRANSFER,
//       amount: numAmount,
//       date: new Date(),
//       from: fromWallet.owner,
//     });
//   },

//   convert(amount, fromCurrency, toCurrency) {
//     if (!rates[fromCurrency] || !rates[toCurrency]) {
//       console.log("Валюта не підтримуєтся");
//       return;
//     }
//     const amountUSD = amount / rates[fromCurrency];
//     const convertedAmount = amountUSD * rates[toCurrency];
//     return Number(convertedAmount.toFixed(2));
//   },
// };

// var summation = function (num) {
//   const arr = [num];
//   for (let i = num; i > 0; i--) {
//     arr.push(i - 1);
//   }
//   return arr.reduce((acc, n) => acc + n, 0);
// };

// console.log(summation(3));

// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// class Storage {
//   #items;
//   constructor(arr) {
//     this.#items = arr;
//   }

//   getItems() {
//     return this.#items;
//   }
//   addItem(newItem) {
//     this.#items.push(newItem);
//   }
//   removeItem(itemToRemove) {
//     this.#items = this.#items.filter((item) => item !== itemToRemove);
//   }
// }

// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// storage.removeItem("Scaner");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// class StringBuilder {
//   #value;
//   constructor(initialValue) {
//     this.#value = initialValue;
//   }

//   getValue() {
//     return this.#value;
//   }

//   padEnd(str) {
//     this.#value += str;
//   }
//   padStart(str) {
//     this.#value = str += this.#value;
//   }
//   padBoth(str) {
//     this.#value = str + this.#value + str;
//   }
// }

// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

// function rowSumOddNumbers(n) {
//   let sum = 0;
//   let current;

//   for (let i = 0; i < n; i++) {
//     sum += current;
//     current += 2;
//   }
// }

// const bestiary = {
//   Griffin: ["Grapeshot", "Hybrid Oil", "Aard"],
//   Noonwraith: ["Yrden", "Moon Dust", "Specter Oil"],
//   Drowner: ["Igni", "Necrophage Oil"],
// };

// function identifyMonster(observedWeaknesses, bestiary) {
//   let mes = "Unknown monster";
//   for (const key of Object.keys(bestiary)) {
//     if (
//       observedWeaknesses.every((weakness) => bestiary[key].includes(weakness))
//     ) {
//       return key;
//     }
//   }
//   return mes;
// }

// console.log(identifyMonster([], bestiary));

// identifyMonster(["Igni", "Necrophage Oil"], bestiary);
// // Returns: "Drowner"

// identifyMonster(["Yrden", "Moon Dust"], bestiary);
// // Returns: "Noonwraith" (since these vulnerabilities are in its list)

// identifyMonster(["Silver", "Garlic"], bestiary);
// // Returns: "Unknown monster"

// const users = [
//   {
//     id: 1,
//     name: "Ola",
//     age: 20,
//     isActive: true,
//     skills: ["html", "css"],
//     projects: [
//       { name: "Landing", hours: 30 },
//       { name: "Portfolio", hours: 20 },
//     ],
//   },
//   {
//     id: 2,
//     name: "Max",
//     age: 25,
//     isActive: false,
//     skills: ["html", "css", "js"],
//     projects: [{ name: "Dashboard", hours: 50 }],
//   },
//   {
//     id: 3,
//     name: "Anna",
//     age: 22,
//     isActive: true,
//     skills: ["html", "css", "js", "react.js"],
//     projects: [
//       { name: "API", hours: 40 },
//       { name: "Bot", hours: 15 },
//     ],
//   },
//   {
//     id: 4,
//     name: "Ivan",
//     age: 30,
//     isActive: true,
//     skills: ["html"],
//     projects: [],
//   },
//   {
//     id: 5,
//     name: "Kate",
//     age: 27,
//     isActive: false,
//     skills: ["figma"],
//     projects: [{ name: "Design System", hours: 60 }],
//   },
//   {
//     id: 6,
//     name: "Leo",
//     age: 24,
//     isActive: true,
//     skills: ["node.js", "react.js"],
//     projects: [
//       { name: "Backend", hours: 45 },
//       { name: "Auth", hours: 25 },
//     ],
//   },
// ];

// const res = users.map((user) => ({
//   name: user.name,
//   topProject: user.projects.reduce(
//     (acc, project) => (acc.hours < project.hours ? project : acc),
//     user.projects[0] || null
//   ),
// }));

// const age = users.filter((user) => user.age > 23 && user.isActive);

// const id = users.find((user) => user.id === 3);

// const hasProjects = users.some((user) => !user.projects.length);

// const everyIsActice = users.every((user) => user.isActive);

// const allSkills = users.map((user) => user.skills).flat(1);

// const hours = users.reduce(
//   (acc, user) =>
//     (acc += user.projects.reduce((acc, project) => (acc += project.hours), 0)),
//   0
// );

// const countSkills = allSkills.reduce((acc, skill) => {
//   //   return { ...acc, [skill]: acc[skill] ? acc[skill] + 1 : 1 };
//   const newAcc = { ...acc };
//   console.log(newAcc);
//   if (newAcc[skill]) {
//     newAcc[skill] += 1;
//   } else {
//     newAcc[skill] = 1;
//   }

//   return newAcc;
// }, {});

// const sortAge = users
//   .sort((a, b) => a.age - b.age)
//   .sort((a, b) => a.name.localeCompare(b.name));

// console.log(sortAge);

// 1) отримати всі імена, додати нове поле topProject з одним проєктом з найбільшим часом.
// 2) Отримати всіх активних користувачів старших за 23
// 3) Знайти користувача з id 3
// 4) Чи є користувач в якого немає проєктів (projects)
// 5) Чи всі користувачі активні?
// 6) Отримати всі скіли (skills) в один масив
// 7) Порахувати загальну кількість годин всіх користувачів
// 8) Якими skills володіють користувачі, в розрізі кожного скіла ({css: 2, html: 3, ....})
// 9) Відсортувати користувачів за віком
// 10) Відсортувати користувачів за імʼям

// http://www.freecodecamp.org/

// https://nejdancs.github.io/Game-Guess-the-number/

// Sergey Korobka
// 11:37
// https://github.com/Nejdancs/Game-Guess-the-number

// Sergey Korobka
// 11:40
// https://github.com/Nejdancs/game-barley-break

// Sergey Korobka
// 11:41
// https://github.com/Nejdancs/Dino-Game

const modalBtn = document.querySelector(".modal-header-btn");
const modalOverlay = document.querySelector(".modal-overley.is-hidden");
const headerBtnModal = document.querySelector(".btn-mobile");

headerBtnModal.addEventListener("click", () => {
  modalOverlay.classList.toggle("is-hidden");
});

modalBtn.addEventListener("click", () => {
  modalOverlay.classList.toggle("is-hidden");
});

const form = document.querySelector(".contact-form");
const LOCAL_STORAGE_KEY = "feedback-form-state";

const formData = {
  name: "",
  email: "",
  phoneNumber: "",
  comment: "",
};

const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);

if (savedData) {
  const parsedData = JSON.parse(savedData);

  formData.name = parsedData.name || "";
  formData.email = parsedData.email || "";
  formData.phoneNumber = parsedData.phoneNumber || "";
  formData.comment = parsedData.comment || "";

  form.elements.fullName.value = formData.name;
  form.elements.email.value = formData.email;
  form.elements.phone.value = formData.phoneNumber;
  form.elements.comment.value = formData.comment;
}

form.addEventListener("input", handleInput);

function handleInput(event) {
  const { name, value } = event.target;

  if (name === "fullName") {
    formData.name = value;
  } else if (name === "email") {
    formData.email = value;
  } else if (name === "phone") {
    formData.phoneNumber = value;
  } else if (name === "comment") {
    formData.comment = value;
  }

  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
}

form.addEventListener("submit", hendleSubmit);

function hendleSubmit(event) {
  event.preventDefault();

  const name = form.elements.fullName.value.trim();
  const email = form.elements.email.value.trim();
  const phoneNumber = form.elements.phone.value.trim();
  const comment = form.elements.comment.value.trim();

  if (!email || !comment || !name || !phoneNumber) {
    alert("Fill please all fields");
    return;
  }

  console.log(formData);

  localStorage.removeItem(LOCAL_STORAGE_KEY);

  formData.name = "";
  formData.email = "";
  formData.phoneNumber = "";
  formData.comment = "";

  form.reset();
}
