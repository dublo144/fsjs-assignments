const array = [1, 2, 3, 4, 5];

const myFilter = (array, callback) => {
  const filteredArray = [];
  for (let i = 0; i < array.length; i++) {
    const result = callback(array[i]);
    if (result) filteredArray.push(array[i]);
  }
  return filteredArray;
};

console.log(myFilter(array, (num) => num % 2 === 0));

const myMap = (array, callback) => {
  const mappedArray = [];
  for (let i = 0; i < array.length; i++) {
    mappedArray.push(callback(array[i]));
  }
  return mappedArray;
};

console.log(myMap(array, (num) => num * 2));

const numbers = [2, 3, 67, 33];

console.log(numbers.reduce((acc, curr) => acc + curr));

let members = [
  { name: "Peter", age: 18 },
  { name: "Jan", age: 35 },
  { name: "Janne", age: 25 },
  { name: "Martin", age: 22 },
];

console.log(
  members.reduce((total, { age }, index, array) => {
    total += age;
    if (index === array.length - 1) {
      return total / array.length;
    } else {
      return total;
    }
  }, 0)
);

console.log(
  members
    .map((el) => el.age)
    .reduce((total, curr, index, array) => {
      total += curr;
      if (index === array.length - 1) {
        return total / array.length;
      } else {
        return total;
      }
    })
);

const votes = [
  "Clinton",
  "Trump",
  "Clinton",
  "Clinton",
  "Trump",
  "Trump",
  "Trump",
  "None",
];

console.log(
  votes.reduce((obj, curr) => {
    obj[curr] = ++obj[curr] || 1;
    return obj;
  }, {})
);
