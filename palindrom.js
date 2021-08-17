const testText = 'Anna';

function isPalindrom (str) {
  const lowerCase = str.toLowerCase();
  return lowerCase === lowerCase.split('').reverce().join('');
}

console.log('isPalindrom:', isPalindrom(testText));