// A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

// Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

// ###Arguments (Haskell)

// First argument: space-delimited list of minor words that must always be lowercase except for the first word in the string.
// Second argument: the original string to be converted.
// ###Arguments (Other languages)

// First argument (required): the original string to be converted.
// Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.

// Examples:
// titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
// titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
// titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'

function titleCase(title, minorWords) {
  let minorWord =
    typeof minorWords !== 'undefined'
      ? minorWords.toLowerCase().split(' ')
      : [];
  return title
    .toLowerCase()
    .split(' ')
    .map((v, i) => {
      if (v != '' && (minorWord.indexOf(v) === -1 || i == 0)) {
        v = v.split('');
        v[0] = v[0].toUpperCase();
        v = v.join('');
      }
      return v;
    })
    .join(' ');
}

function titleCase3(title, minorWords) {
  let arr = title.toLowerCase().split(' ');

  // The first charactor should uppercase of every word.
  arr
    .forEach(a => {
      return a.charAt(0).toUpperCase() + a.slice(1);
    })
    .join(' ');

  // Should lowercase the word if it show within minorWords
  if (minorWords !== undefined) {
    let pattern = minorWords
      .toLowerCase()
      .split(' ')
      .forEach(a => {
        a.charAt(0).toUpperCase() + a.slice(1);
      });

    pattern.forEach(e => {
      if (arr.includes(e, 1)) {
        arr.indexOf(e).replace(e.toLowerCase());
      }
    });
  }

  return arr;
}

// Second solution
const titleCase2 = (title, minorWords) => {
  if (!title) return title;

  let cap = word => word[0].toUpperCase() + word.slice(1);

  let minors = (minorWords || '').toLowerCase().split(' ');

  let result = title
    .toLowerCase()
    .replace(/\S+/g, w => (minors.indexOf(w) === -1 ? cap(w) : w));

  return cap(result);
};
