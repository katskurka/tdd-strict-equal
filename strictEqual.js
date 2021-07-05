let valueOne;
let valueTwo;

function strictEqual(valueOne, valueTwo) {
  if(valueOne == valueTwo) && (typeof(valueOne) == typeof(valueTwo)) {
    return true
  }
    else {
      return false
    }
  }