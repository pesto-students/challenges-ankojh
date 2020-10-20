import React, { useState } from 'react';
import './App.css';
import AddItem from './components/addItem/AddItem';
import Button from './components/button/Button';
import ListItem from './components/listItem/ListItem';

function App() {


  const [groceryList, setGroceryList] = useState({
    bread: { count: 1, isPurchased: false },
    milk: { count: 2, isPurchased: false },
    milasdadsasdasdasdasdasdasdadadk: { count: 2, isPurchased: false },
  })




  function hasItem(itemName) {
    return Boolean(groceryList[itemName]);
  }



  function addItem(itemName) {
    const currentGroceryList = { ...groceryList };
    if (hasItem(itemName)) {
      currentGroceryList[itemName].count++;
    }
    else {
      currentGroceryList[itemName] = { count: 1, isPurchased: false }
    }
    setGroceryList(currentGroceryList);
  }


  function clearItem(itemName) {
    const currentGroceryList = { ...groceryList }
    delete currentGroceryList[itemName];
    setGroceryList(currentGroceryList);
  }



  function clearAllItems() {
    setGroceryList({});
  }



  function changePurchaseState(itemName, purchaseState) {
    const currentGroceryList = { ...groceryList };
    currentGroceryList[itemName].isPurchased = purchaseState
    setGroceryList(currentGroceryList);
  }


  function togglePurchaseItem(itemName){
    const currentPurchaseState = groceryList[itemName].isPurchased;
    changePurchaseState(itemName, !currentPurchaseState);
  }


  return (
    <div className="App">
      <h1>Your Grocery List</h1>
      <div className="App-options">
        <AddItem addItem={addItem}/>
        <Button onClick={clearAllItems}>Clear All</Button>
      </div>

      <div className="App-list">
        {Object.entries(groceryList).map(([itemName, itemDetails]) =>
          <ListItem onClick={togglePurchaseItem} key={itemName} {...itemDetails}>{itemName}</ListItem>
        )}
      </div>

    </div>
  );
}

export default App;
