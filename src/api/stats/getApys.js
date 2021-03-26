const getPangolinApys = require('./pangolin/getPangolinLpApys');
const getComAvaxApys = require('./complus/getComAvaxLpApys');
const getSnobLpApys = require('./snowball/getSnobLpApys');

const INIT_DELAY = 4 * 60 * 1000;
const REFRESH_INTERVAL = 15 * 60 * 1000;

let apys = {};

const getApys = () => {
  return apys;
};

const updateApys = async () => {
  console.log('> updating apys');

  try {
    const values = await Promise.all([
      getPangolinApys(),
      getComAvaxApys(),
      getSnobLpApys(),
    ]);

    for (item of values) {
      apys = { ...apys, ...item };
    }

    console.log('> updated apys');
  } catch (err) {
    console.error('> apy initialization failed', err);
  }

  setTimeout(updateApys, REFRESH_INTERVAL);
};

setTimeout(updateApys, INIT_DELAY);

module.exports = getApys;
