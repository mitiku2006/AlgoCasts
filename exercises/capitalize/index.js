// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let result = str[0].toUpperCase();

    for (let i = 1; i < str.length; i++) {
        result +=  str[i-1] === ' ' ? str[i].toUpperCase() : str[i];
    }
    return result;
}

// function capitalize(str) {
//     const words = [];
//
//     for(let w of str.split(' ')){
//         words.push(w[0].toUpperCase() + w.slice(1))
//     }
//     return words.join(' ');
// }
// function capitalize(str) {
//     const regex = /\S+/g;
//
//     const temp = (str.match(regex));
//     console.log(str);
//
//     let result = '';
//
//     temp.forEach(s => {
//         result += s[0].toUpperCase() + s.slice(1) + ' ' ;
//     })
//     return result.trim();
// }

module.exports = capitalize;
