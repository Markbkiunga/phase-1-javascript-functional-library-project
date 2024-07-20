function myEach(collection, callback) {
  if (
    Array.isArray(collection) === false &&
    typeof collection === 'object' &&
    typeof collection !== null
  ) {
    let objectValuesArray = Object.values(collection);
    objectValuesArray.forEach((element) => {
      console.log(element);
      callback(element);
    });
  } else if (Array.isArray(collection) === true) {
    collection.forEach((element) => {
      console.log(element);
      callback(element);
    });
  }
  return collection;
}
// myEach([1, 2, 3], alert);
// myEach({ one: 1, two: 2, three: 3 }, alert);

function myMap(collection, callback) {
  let newArray = [];

  if (
    Array.isArray(collection) === false &&
    typeof collection === 'object' &&
    typeof collection !== null
  ) {
    let objectValuesArray = Object.values(collection);
    objectValuesArray.forEach((element) => {
      newArray.push(callback(element));
      return newArray;
    });
  } else if (Array.isArray(collection) === true) {
    collection.forEach((element) => {
      newArray.push(callback(element));
      return newArray;
    });
  }
  console.log(newArray);
  console.log(collection);
  return newArray;
  return collection;
}
// myMap([1, 2, 3], function (num) {
//   return num * 3;
// });
// myMap({ one: 1, two: 2, three: 3 }, function (num) {
//   return num * 3;
// });

function myReduce(collection, callback, acc) {}
