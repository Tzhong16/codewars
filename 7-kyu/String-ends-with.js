// Complete the solution so that it returns true if the first argument(string)
// passed in ends with the 2nd argument (also a string).

// Examples:
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending) {
  // TODO: complete
  // check 2nd arg string lenght
  let strlength = ending.length;
  let arr = str.split('');
  let newArr = [];

  for (let i = strlength; i > 0; i--) {
    newArr.unshift(arr.pop());
  }

  if (newArr.join('') === ending) return true;
  if (newArr.join('') !== ending) return false;
}

//other solutions
function solution(str, ending) {
  // TODO: complete
  str.endsWith(ending);
}
