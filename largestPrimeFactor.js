exports.largestPrimeFactor = function(n){
  var primeNumber = 0;
  var primeArr = [2, 3];
  var isPrime;

  for (var i = 4; i <= n; i++){
    isPrime = true;
    for (var j = 0; j < primeArr.length; j++){
      if (i % primeArr[j] === 0){
        isPrime = false;
        break;
      }
    }
    if (isPrime === true){
      primeArr.push(i);
    }
  }
  
  for (var k = primeArr.length - 1; k >= 0; k--){
    if (n % primeArr[k] === 0){
      primeNumber = primeArr[k];
      break;
    }
  }
  
  return primeNumber;
};