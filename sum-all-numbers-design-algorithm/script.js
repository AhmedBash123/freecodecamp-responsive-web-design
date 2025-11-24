function sumAll(array){
  let total = 0;
  let min = Math.min(...array);
  let max = Math.max(...array);

  for(let i = min; i <= max; i++){
    total += i;
  }
  return total;
}

console.log(sumAll([5, 10]))
