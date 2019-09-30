// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
  // Go for it
  let result = [];

  str.split(' ').forEach(word => result.push(word.split('')));

  return result.map(a => a.reverse().join('')).join(' ');
}
