'use strict';

const score = 85;
const name = 'taguchi';

// if (score >= 80) {
//   console.log('Grate!');
// } else if (score >= 60){
//   console.log('Good');
// } else {
//   console.log('OK...');
// }

// 三項演算子
// score >= 80 ? console.log('Grate!') : console.log('OK...');

// if (score >= 50) {
//   if (name === 'taguchi') {
//     console.log('Good job!');
//   }
// }

if (score >= 50 && name === 'taguchi') {
  console.log('Good job!');
}

// switch文での条件分岐

const signal = 'pink';

switch (signal) {
  case 'red':
    console.log('Stop!');
    break;
  case 'yellow':
    console.log('Caution!');
    break;
  case 'blue':
  case 'green':
    console.log('Go!');
    break;
  default:
    console.log('Wrong signal!');
    break;
}