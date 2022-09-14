const findSum = function(array) {
  let sumOfArray = array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  })
  return (sumOfArray);
};

const findFrequency = function(array) {
  // your code here - don't forget to return an object!
};

const isPalindrome = function(str) {
   str = str.toLowerCase();
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] != str[str.length - 1 - i]) {
      return false;
    } else {
    return true;
  }
}
};

const largestPair = function(array) {
  let products = [];
  for (let i = 0; i < array.length; i++) {
    let currentNum = array[i];
    let nextNum = array[i + 1];
    let product = currentNum * nextNum;

    if (currentNum && nextNum) {
    products.push(product);
    }
  }
  let largestProduct = Math.max(...products);
  return largestProduct;
};

const removeParenth = function(str) {
  let newWords = str.replace(/[\])}[(]/g, '');
  return (newWords);
};

const scoreScrabble = function(str) {
   let scrabblePoints = [];
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    let points = 0;
   
    if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u' || letter === 'l' || 
    letter === 'n' || letter === 'r' || letter === 's' || letter === 't') {
      points = 1;
      scrabblePoints.push(points);

    } else if (letter === 'd' || letter === 'g') {
      points = 2;
      scrabblePoints.push(points);

    } else if (letter === 'b' || letter === 'c' || letter === 'm' || letter === 'p') {
      points = 3;
      scrabblePoints.push(points);

    } else if (letter === 'f' || letter === 'h' || letter === 'v' || letter === 'w' || letter === 'y') {
      points = 4;
      scrabblePoints.push(points);

    } else if (letter === 'k') {
      points = 5;
      scrabblePoints.push(points);

    } else if (letter === 'j' || letter === 'x') {
      points = 8;
      scrabblePoints.push(points);

    } else if (letter === 'q' || letter === 'z') {
      points = 10;
      scrabblePoints.push(points);
    }
  }
  let sumOfPoints = scrabblePoints.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });
  return sumOfPoints;
};
