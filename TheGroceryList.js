function createGroceryList() {
  const creatList = prompt("Do you want to create a Grocery list? (y/n)").tolowerCase();

  if (createList === 'y') {
      const numberOfItems = parseInt(promt("How many items do you want to add?"));
      let groceryList = [];

      for (let i = 0; i < numberOfItems; i++) {
          const item =  promt("Enter item ${i + 1}:");
          groceryList.push(item);
      }

      const groceryListSort = {...groceryList.sort();
      const groceryListREverse = {...groceryList}.reverse():

      alert("Grocery List " + groceryList.join(", "));
      alert("Sorted Grocery List " + groceryListSort.join(", "));
      alert("Reversed Grocery List " + groceryListReverse.join(", "));
  } else {
      alert("No grocery list created.");
}

createGroceryList();
