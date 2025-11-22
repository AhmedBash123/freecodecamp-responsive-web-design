let inventory = [];

function findProductIndex(itemName) {
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name.toLowerCase() === itemName.toLowerCase()) {
      return i;
    }
  }
  return -1;
}

function addProduct(item) {
  const index = findProductIndex(item.name);
  if (index !== -1) {
    inventory[index].quantity += item.quantity;
    console.log(`${inventory[index].name} quantity updated`);
  } else {
    inventory.push({ name: item.name.toLowerCase(), quantity: item.quantity });
    console.log(`${item.name.toLowerCase()} added to inventory`);
  }
}

function removeProduct(itemName, quantity) {
  const index = findProductIndex(itemName);
  if (index === -1) {
    console.log(`${itemName.toLowerCase()} not found`);
    return;
  }
  const product = inventory[index];
  if (product.quantity > quantity) {
    product.quantity -= quantity;
    console.log(`Remaining ${product.name} pieces: ${product.quantity}`);
  } else if (product.quantity === quantity) {
    inventory.splice(index, 1);
    console.log(`${product.name} removed from inventory`);
  } else {
    console.log(`Not enough ${product.name} available, remaining pieces: ${product.quantity}`);
  }
}


addProduct({ name: "FLOUR", quantity: 20 }); // flour added to inventory
addProduct({ name: "rice", quantity: 5 });   // rice added to inventory
addProduct({ name: "FLOUR", quantity: 5 });  // flour quantity updated

removeProduct("FLOUR", 10);  // Remaining flour pieces: 15
removeProduct("FLOUR", 15);  // flour removed from inventory
removeProduct("SUGAR", 5);   // sugar not found

console.log(inventory); // [{ name: "rice", quantity: 5 }]
