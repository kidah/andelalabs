function checkprime(n){
    for (c=2; c<=n - 1; c++){
      if ( n%c == 0 ){
        return false;
      }
      return true;
   }
}

function getPrimes(num){
	if (num <= 0){
       throw new RangeError('Number must be positive');
	}
	else{
		var primes = [];
	    for i in range(0, num){
		   if (checkprime(i) == true){
			primes.push(i);
		   }
	    }
	    return primes;
	}
	
}