'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';
    let delimiter = separator;

    if (delimiter === undefined) {
      delimiter = ',';
    }

    if (delimiter === null) {
      delimiter = 'null';
    };

    for (let i = 0; i < this.length; i++) {
      if (((this[i] === null) || (this[i] === undefined))
       && (i !== (this.length - 1))) {
        result += String(delimiter);
      } else if ((i === (this.length - 1)) && (this[i] !== undefined)) {
        result += this[i];
      } else if (i !== (this.length - 1)) {
        result += this[i] + String(delimiter);
      } else {
        break;
      };
    };

    return result;
  };
}

module.exports = applyCustomJoin;
