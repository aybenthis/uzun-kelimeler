function isHardToComprehend(word) {
  var characterCount = word.length;

  if (word.length > 0 && characterCount % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isHardToComprehend('Vurdumduymaz'));
console.log(isHardToComprehend('Tesla'));
console.log(isHardToComprehend(''));
