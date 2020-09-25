const { getSecureRandoms } = require('./01');

getSecureRandoms([48, 40, 32, 24, 16, 8]).then((randoms) =>
  console.log(randoms)
);

const getSecureRandomsAwait = async (sizes = [48, 40, 32, 24, 16, 8]) => {
  return await getSecureRandoms(sizes);
};

module.exports = getSecureRandomsAwait;
