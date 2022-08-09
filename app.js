// Object Destructuring 1
/*
console.log(numPlanets); // ?
answer:  8
console.log(yearNeptuneDiscovered); // ?
answer:  1846
*/

//Object Destructuring 2
/*
console.log(discoveryYears); // ?
answer:  {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}
*/

//Object Destructuring 3
/*
getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // ?
answer:  'Your name is Alejandro and you like purple'
getUserData({firstName: "Melissa"}) // ?
answer:  'Your name is Melissa and you like green'
getUserData({}) // ?
answer:  'Your name is undefined and you like green'
*/

//Array Destructuring 1
/*
console.log(first); // ?
answer:  'Maya"
console.log(second); // ?
answer:  'Marisa'
console.log(third); // ?
answer:  'Chi'
*/

//Array Destructuring 2
/*
console.log(raindrops); // ?
answer:  'Raindrops on roses'
console.log(whiskers); // ?
answer:  'whiskers on kittens'
console.log(aFewOfMyFavoriteThings); // ?
answer:  ['Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]
*/

//Array Destructing 3
/*
console.log(numbers) // ?
answer:  [20, 10, 30]
*/

//ES2015 Object Destructuring
const obj = {
    numbers: {
        a: 1,
        b: 2
    }
}
const {numbers: {a, b}} = obj;

//ES2015 One-Line Array Swap with Destructuring
const arr = [1,2];
[arr[0], arr[1]] = [arr[1], arr[0]];

//raceResults()
const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest});