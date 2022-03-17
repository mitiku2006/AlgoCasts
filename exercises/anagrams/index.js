// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function filterCharOnly(str) {
    const regX = /[^\w]/g;
    return str.replace(regX, '').toLowerCase().split('').sort().join();
}

function anagrams(stringA, stringB) {
    return filterCharOnly(stringA) === filterCharOnly(stringB);
}

module.exports = anagrams;

// function buildCharMap(str) {
//     const tempArr = {};
//     const regX = /[^\w]/g;
//     const tempA = str.replace(regX, '').toLowerCase();
//     for (let char of tempA) {
//         tempArr[char] = tempArr[char] + 1 || 1;
//     }
//     return tempArr;
// }
// function anagrams(stringA, stringB) {
//     const tempAarr = buildCharMap(stringA);
//     const tempBarr = buildCharMap(stringB);
//     debugger;
//     if (Object.keys(tempAarr).length !== Object.keys(tempBarr).length) {
//         return false;
//     }
//
//     for(let char in tempAarr) {
//         if(tempAarr[char] !== tempBarr[char]) {
//             console.log(false);
//             return false;
//         }
//     }
//     console.log(true);
//     return true;
// }