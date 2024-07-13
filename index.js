let express = require('express');
let app = express();
let port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

let numbers = [1, 2, 3, 4, 5];
let strings = ['hello', 'world', 'javascript', 'node',];

//1
function addToArray(numbers, num) {
  numbers.push(num);
  return numbers;
}
app.get('/numbers/add', (req, res) => {
  let result = addToArray(numbers, 6);
  res.json(result);
});
//numbers/add

//2
function addToString(strings, str) {
  strings.push(str);
  return strings;
}
app.get('/strings/add', (req, res) => {
  let result = addToString(strings, 'express');
  res.json(result);
});
//strings/add

//3
function sumNumbers(numArray) {
  let sum = 0;
  for (let i = 0; i < numArray.length; i++) {
    sum = sum + numArray[i];
  }
  return sum;
}
app.get('/numbers/sum', (req, res) => {
  let result = sumNumbers(numbers);
  res.json({ sum: result });
});
//numbers/sum

//4
function findMax(numArray) {
  let max = numArray[0];
  for (let i = 1; i < numArray.length; i++) {
    if (numArray[i] > max) {
      max = numArray[i];
    }
  }
  return max;
}
app.get('/numbers/max', (req, res) => {
  let result = findMax(numbers);
  res.json({ max: result });
});
//numbers/max