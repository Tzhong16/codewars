
// Create function expect come out: 
// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'


function expandedForm(num) {
    // Your code here
    let numStr = num.toString().split('');

    for (let i = 0; i < numStr; i++) {

        for (let y = numStr.length; y > 1; y--) {
            numStr[i] += '0';
            // console.log(y);  use this to debug y, and no y value print out from console
        }
    }

    return numStr.join('+')
}

console.log(expandedForm(23));

//others solution

const expandedForm2 = n => n.toString()
    .split("")
    .reverse()
    .map((a, i) => a * Math.pow(10, i))
    .filter(a => a > 0)
    .reverse()
    .join(" + ");


var expandedForm3 = (num) => {
    var arr = num.toString().split('').reverse();
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        arr[i] == 0 ? result.push() : result.push(arr[i] + ('0'.repeat(i)))
    }
    return result.reverse().join(' + ')
}