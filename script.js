// const inventors = [
//   { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
//   { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
//   { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
//   { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
//   { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
//   { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
//   { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
//   { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
//   { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
//   { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
//   { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
//   { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
// ];

// Array.prototype.filter()
// 1. Filter the array of inventors into a new array containing only the inventors born in the 1500's
//////////////////////////////////////
// const inventors1500s = inventors.filter((inventor) => inventor.year < 1600 && inventor.year >1499);
// console.log(inventors1500s);



// Array.prototype.map()
// 2. Map the array of the inventors into a new array containing objects with just the first and last names as properties
// Hint:  Return a new object literal from the callback (don't mutate the object being passed in to map)
////////////////////////////////////
// const inventorEls = inventors.map((inventor) => inventor = `${inventor.first} ${inventor.last}`)
// console.log(inventorEls);


// Array.prototype.sort()
// 3. Sort the inventors by birth date (year property), in ascending order
/////////////////////////////////
// const sorted = inventors.sort((a, b) => a.year - b.year);
// console.log(sorted);


// Array.prototype.find()
// 4. Find the inventor object with the first name of 'Ada'
////////////////////////////////////////
// const firstNameAda = inventors.find((inventor) => inventor.first === "Ada");
// console.log(firstNameAda);


// Array.prototype.reduce()
// 5. How many years did all the inventors live?
/////////////////////////////////////////
// const totalYearsLived = inventors.reduce((acc, inventor) => {
//   const yearsLived = inventor.passed - inventor.year;
//   return acc + yearsLived;
// }, 0);

// console.log(totalYearsLived);





// const people = [
//   'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry',
//   'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul',
//   'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David',
//   'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana',
//   'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar',
//   'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric',
//   'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell',
//   'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph',
//   'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank',
//   'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony',
//   'Blake, William'
// ];

// Array.prototype.map()
// 6. Map the people array such that the new array consists of strings with the names formatted as "First Last", e.g., "Becker, Carl" should be mapped to "Carl Becker".
// Hint: As a start, consider using the String.prototype.split method to "split" the string using ', ' as the separator
/////////////////////////////////////////
// const arrangedNames = people.map((person) => {
//   const [lastName, firstName] = person.split(', ');
//   return `${firstName} ${lastName}`
// })
// console.log(arrangedNames);




// const data = [
//   'car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van',
//   'bike', 'walk', 'car', 'van', 'car', 'truck'
// ];

// Array.prototype.reduce()
// 7. Count the number of instances for each of the data items. The reduce should return an object where the keys are 'car', 'truck', etc. and the values are the count.
// Hint: Since you want to return an object, be sure to pass an empty {} for the initial value of the "accumulator".
//////////////////////////////////////////
// const initialValue = {};

// const countInstances = data.reduce((acc, currentItem) => {
//   if (acc.hasOwnProperty(currentItem)) {
//     acc[currentItem] += 1;
//   } else {
//     acc[currentItem] = 1;
//   }
//   return acc;
// }, {});

// console.log(countInstances);


/////// (alternate version of if/else)
// const initialValue = {};

// const countInstances = data.reduce((acc, currentItem) => { acc[currentItem] = acc[currentItem] ? acc[currentItem] + 1 : 1;
// return acc;
// }, {});

// console.log(countInstances);





// const devs = [
//   { name: 'Wes', year: 1988 },
//   { name: 'Kait', year: 1986 },
//   { name: 'Irv', year: 1970 },
//   { name: 'Lux', year: 2015 }
// ];

// Array.prototype.some()
// 8. Check if at least one person is 19 or older?
// Hint: To get today's year, use the getFullYear method of new Date(), i.e., new Date().getFullYear()
/////////////////////////////
// const atLeastOneIs19 = devs.some((dev) => {
//   const currentYear = new Date().getFullYear();
//   const ageCheck = currentYear - dev.year >= 19;
//   return ageCheck;
// })

// console.log(atLeastOneIs19);

// Array.prototype.every()
// 9. Check if everyone is 19 or older?
/////////////////////////////
// const olderThan19 = devs.every((dev) => {
//   const currentYear = new Date().getFullYear();
//   constAgeCheck = currentYear - dev.year >= 19;
// })
// console.log(olderThan19);


// const comments = [
//   { text: 'Love this!', id: 523423 },
//   { text: 'Super good', id: 823423 },
//   { text: 'You are the best', id: 2039842 },
//   { text: 'Ramen is my fav food ever', id: 123523 },
//   { text: 'Nice Nice Nice!', id: 542328 }
// ];

// Array.prototype.find()
// 10. Find the comment with the id of 823423
/////////////////////////////////////////////

// const findId = comments.find((comment) => comment.id === 823423)
// console.log(findId);


// Array.prototype.findIndex()
// 11. Find the index of the comment with an id of 123523
///////////////////////////////////////
// const commentIdx = comments.findIndex((comment) => comment.id === 123523)

// console.log(commentIdx);