const crypto = require('crypto');
const sixSecureRandoms = {
  title: '6 Secure Randoms',
  randoms: []
};

// a) First implement the functionality without promises, using callbacks.

// crypto.randomBytes(48, function (err, buffer) {
//   sixSecureRandoms.randoms.push({
//     length: buffer.length,
//     random: `A buffer with ${buffer.length} hex-chars`
//   });
//   crypto.randomBytes(40, function (err, buffer) {
//     sixSecureRandoms.randoms.push({
//       length: buffer.length,
//       random: `A buffer with ${buffer.length} hex-chars`
//     });
//     crypto.randomBytes(32, function (err, buffer) {
//       sixSecureRandoms.randoms.push({
//         length: buffer.length,
//         random: `A buffer with ${buffer.length} hex-chars`
//       });
//       console.log(sixSecureRandoms);
//     });
//   });
// });

// Create a function makeSecureRandom(size) that returns a promise, using the callback based design,provided by the randomBytes(..) method.
const makeSecureRandom = (size) => {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(size, (err, buffer) => {
      if (err) return reject(err);
      resolve({
        length: buffer.length,
        random: `A buffer with ${buffer.length} hex-chars`
      });
    });
  });
};

// Since the result from one calculation does not influence the next (only order matters), use Promise.all(..) to execute the operations in parallel.
const secureRandoms = [
  makeSecureRandom(48),
  makeSecureRandom(40),
  makeSecureRandom(32),
  makeSecureRandom(24),
  makeSecureRandom(16),
  makeSecureRandom(8)
];

// Promise.all(secureRandoms)
//   .then((res) => (sixSecureRandoms.randoms = res))
//   .then(() => console.log(sixSecureRandoms));

// c) Refactor your solution into a module and export it
// Jeg kunne bare have refaktoreret makeSecureRandom og eksporteret den, men for at beholde begge løsninger, bliver det sådan her.
module.exports = {
  getSecureRandoms: (sizes) => {
    return Promise.all(sizes.map(makeSecureRandom));
  }
};
