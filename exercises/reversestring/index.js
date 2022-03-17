// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    debugger;
    return str.split('').reduce((r, c) => c + r, '');
}

reverse('akhn');

// function reverse(str) {
//     let rev = '';
//     for (let character of str) {
//         rev = character + rev;
//     }
//     return rev;
// }

// function reverse(str) {
//     const arr = str.split('');
//     arr.reverse();
//     return arr.join('');
// }

module.exports = reverse;
