//Warm Up Exercise #1
function addTwoExceptToOddNumbers(numbers) {
  const result = [];
  for (const num of numbers) {
    if (num % 2 === 1) {
      result.push(num);
    } else {
      result.push(num + 2);
    }
  }
  return result;
}

console.log(addTwoExceptToOddNumbers([1, 2, 3, 4, 5])); // [1,4,3,6,5]
console.log(addTwoExceptToOddNumbers([101, 1, 4, 10])); // [101,1,6,12]
