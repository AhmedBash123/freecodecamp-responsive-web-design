let lunches = []


function addLunchToEnd(lunches,item) {
  lunches.push(item)
  console.log(item+ " added to the end of the lunch menu.");
  return lunches;
}

addLunchToEnd(lunches, 'pizza')
addLunchToEnd(lunches, 'roti')
addLunchToEnd(lunches, 'honey')

function addLunchToStart(lunches, item) {
  lunches.unshift(item);
  console.log(item + " added to the start of the lunch menu.");
  return lunches;
}
addLunchToStart(lunches, "Sushi")
addLunchToStart(lunches, 'Loos')
addLunchToStart(lunches, 'Burger')

function removeLastLunch(lunches) {
  if (lunches.length === 0) {
    console.log("No lunches to remove.");
    return lunches;
  }

  let item = lunches.pop();
  console.log(item + " removed from the end of the lunch menu.");
  return lunches;
}

console.log(removeLastLunch(lunches))
console.log(removeLastLunch(lunches))

function removeFirstLunch(lunches) {
  if (lunches.length === 0) {
    console.log("No lunches to remove.");
    return lunches;
  }

  let item = lunches.shift();
  console.log(item + " removed from the start of the lunch menu.");
  return lunches;
}

console.log(removeFirstLunch(lunches))
console.log(removeFirstLunch(lunches))

function getRandomLunch(lunches) {
  if (lunches.length === 0) {
    console.log("No lunches available.");
  }
  let randomIndex = Math.floor(Math.random() * lunches.length);
  let item = lunches[randomIndex];
  console.log("Randomly selected lunch: " + item);
  
}

addLunchToEnd(lunches,'hot chocolate')
addLunchToEnd(lunches,'hot coffee')
getRandomLunch(lunches)

function showLunchMenu(lunches) {
  
  if (lunches.length === 0) {
    console.log("The menu is empty.");
    return;
  }

  
  let menuString = lunches.join(", ");
  console.log("Menu items: " + menuString);
}

showLunchMenu(lunches)


