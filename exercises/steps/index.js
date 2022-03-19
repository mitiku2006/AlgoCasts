// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    const result = '#'.repeat(n);

    for (let i=1; i<= n; i++) {
        console.log(result.slice(0, i) + result.slice(i).replace(/#/g, ' '));
    }
}

module.exports = steps;
