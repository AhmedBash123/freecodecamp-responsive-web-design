function largestOfAll(numOfArr){
  let result = [];
  

  for(let i = 0; i < numOfArr.length; i++){
    let currentArray = numOfArr[i]; 
    let currentMax = Math.max(...currentArray);  
    result.push(currentMax);              
  }
  return result;
}


console.log(largestOfAll([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))
