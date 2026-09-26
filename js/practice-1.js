// // 1 (1)

// function calculateDiscount(price, discount = 0.1) {
//   return price * discount;
// }
// console.log(calculateDiscount(100)); // 10
// console.log(calculateDiscount(200, 0.2)); // 40
// console.log(calculateDiscount(500)); // 50

// // 1 (2)

// function calculateDeliveryPrice(price, delivery = 50) {
//   return price + delivery;
// }
// console.log(calculateDeliveryPrice(200)); // 250
// console.log(calculateDeliveryPrice(200, 30)); // 230
// console.log(calculateDeliveryPrice(500)); // 550

// 1 (3 + for)

// function checkAge(age, minAge = 18) {
//   if (age >= minAge) {
//     return 'Access granted';
//   }

//   return 'Access denied';
// }
// console.log(checkAge(20)); // "Access granted"
// console.log(checkAge(16)); // "Access denied"
// console.log(checkAge(16, 16)); // "Access granted"
// console.log(checkAge(15, 21)); // "Access denied"

// // 1 (4 + for)

// function sumEvenNumbers(numbers) {
//   let total = 0;

//   for (const number of numbers) {
//     if (number % 2 === 0) {
//       total += number;
//     }
//   }

//   return total;
// }
// console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])); // 12
// console.log(sumEvenNumbers([10, 15, 20])); // 30
// console.log(sumEvenNumbers([1, 3, 5])); // 0

// 2 (1 функ.)

const add = (a, b) => a + b;
console.log(add(5, 3)); // 8
console.log(add(10, 20)); // 30

// // 2 (2 функ.)

// const checkAge = age => {
//   if (age >= 18) {
//     return 'Access granted';
//   }

//   return 'Access denied';
// };
// console.log(checkAge(20)); // Access granted
// console.log(checkAge(15)); // Access denied

// // 2 (3)

// const checkNumber = number => {
//   if (number > 0) {
//     return `Positive`;
//   }
//   return `Negative or zero`;
// };
// console.log(checkNumber(5)); // "Positive"
// console.log(checkNumber(-3)); // "Negative or zero"
// console.log(checkNumber(0)); // "Negative or zero"

// // 2 (4)

// const checkNumber = number => {
//   if (number > 0) {
//     return `Positive`;
//   }
//   return `Negative or zero`;
// };
// console.log(checkNumber(5)); // "Positive"
// console.log(checkNumber(-2)); // "Negative or zero"

// 2 (5)

// const checkPassword = password => {
//   if (password.lenght >= 8) {
//     return `Password is valid`;
//   }
//   return `Password is too short`;
// };
// console.log(checkPassword('hello123')); // "Password is valid"
// console.log(checkPassword('hello')); // "Password is too short"

// // 2 (6)

// const checkAge = age => {
//   if (age >= 18) {
//     return `Access granted`;
//   }
//   return `Access denied`;
// };
// console.log(checkAge(20)); // "Access granted"
// console.log(checkAge(16)); // "Access denied"

// 3 (1)

// const calculateSum = number => {
//   let total = 0;
//   for (let i = 0; i <= number; i++) {
//     total += i;
//   }
//   return total;
// };
// console.log(calculateSum(5)); // 15
// console.log(calculateSum(3)); // 6
// console.log(calculateSum(10)); // 55

// // 3 (2)

// const getEvenNumbers = numbers => {
//   const result = [];

//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//       result.push(numbers[i]);
//     }
//   }

//   return result;
// };
// console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]));
// // [2, 4, 6]

// console.log(getEvenNumbers([10, 15, 20, 25]));
// // [10, 20]

// 4 (1 object)

const user = {
  name: 'Alice',
  age: 25,
  hobbies: ['reading', 'music', 'sport'],
  contact: {
    phone: '123-456',
    email: 'alice@mail.com',
  },
};
const userName = user.name;
const userAge = user.age;
const userPhone = user.contact.phone;
const userEmail = user.contact.email;
const numberOfHobbies = user.hobbies.length;
const firstHobby = user.hobbies[0];
const lastHobby = user.hobbies[user.hobbies.length - 1];

// 4 (2)

const product = {
  title: 'Laptop',
  price: 1200,
  categories: ['electronics', 'computers', 'office'],
  seller: {
    name: 'John',
    phone: '555-123',
    email: 'john@shop.com',
  },
};
const productTitle = product.title;
const productPrice = product.price;
const sellerName = product.seller.name;
const sellerPhone = product.seller.phone;
const sellerEmail = product.seller.email;
const numberOfCategories = product.categories.length;
const firstCategory = product.categories[0];
const lastCategory = product.categories[product.categories.length - 1];

// 4 (3)

const apartment = {
  imgUrl: 'https://example.com/image.jpg',
  descr: 'Cozy apartment',
  rating: 5,
  price: 1800,
  tags: ['premium', 'top', 'new'],
  owner: {
    name: 'Michael',
    phone: '111-222-333',
    email: 'michael@mail.com',
  },
};
const image = apartment.imgUrl;
const description = apartment.descr;
const rating = apartment.rating;
const price = apartment.price;
const ownerName = apartment.owner.name;
const ownerEmail = apartment.owner.email;
const numberOfTags = apartment.tags.length;
const firstTag = apartment.tags[0];
const lastTag = apartment.tags[apartment.tags.length - 1];
