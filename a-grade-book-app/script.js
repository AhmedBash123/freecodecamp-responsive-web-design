function getAverage(array){
 
  let average = 0;
  let total = 0;
  for(let i =0; i < array.length; i++){
    total += array[i] ;
    average = total / array.length;
  }
 
  return average;
}

console.log(getAverage([38, 99, 87, 100, 100, 100, 100, 100, 100, 100]))

function getGrade(score) {
  if (score === 100) return "A+";
  else if (score >= 90) return "A";
  else if (score >= 80) return "B";
  else if (score >= 70) return "C";
  else if (score >= 60) return "D";
  else return "F";
}

console.log(getGrade(98))

function hasPassingGrade(score) {
  let grade = getGrade(score);
  return grade !== "F";
  
}

console.log(hasPassingGrade("A"))


function studentMsg(array,score){
   let thePassingGrade = hasPassingGrade(score)

  if(hasPassingGrade(score) == true){
    thePassingGrade = "passed"
  } else {
    thePassingGrade = "failed"
  }

  return `Class average: ${getAverage(array)}. Your grade: ${getGrade(score)}. You ${thePassingGrade} the course.`;

}

console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100))
