'use strict';

const iterate = (obj, callback) => {
  const keysArray = Object.keys(obj);
  for (const key of keysArray) {
    const value = obj[key];
    callback(key, value, obj);
  }
};

module.exports = { iterate };
