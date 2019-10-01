function anagrams(arg1, arg2) {
  let arr1 = arg1.split("").sort();
  let arr2 = arg2.split("").sort();

  for (let i = 0; i < arg1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

// Method 2
function anagrams(arg1, arg2) {
  let arr1 = arg1
    .split("")
    .sort()
    .join();
  let arr2 = arg2
    .split("")
    .sort()
    .join();

  if (arr1.length == arr2.length && arr1 == arr2) return true;
  return false;
}
