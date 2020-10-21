import React, { useEffect, useState } from 'react';
import './App.css';
import AddItem from './components/addItem/AddItem';
import Button from './components/button/Button';
import ListItem from './components/listItem/ListItem';

function App() {

  const [groceryList, setGroceryList] = useState({
    bread: { count: 1, isPurchased: false },
    milk: { count: 2, isPurchased: false },
  })

  const [state, setState] = useState({
    numberOfItems: 0
  })

  useEffect(()=>{
    setState({
      numberOfItems: Object.keys(groceryList).length
    })
  },[groceryList])



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

  function incrementItem(itemName){
    const currentGroceryList = { ...groceryList }
    currentGroceryList[itemName].count++;
    setGroceryList(currentGroceryList);
  }

  function decrementItem(itemName){
    const currentGroceryList = { ...groceryList }
    currentGroceryList[itemName].count--;
    if(currentGroceryList[itemName].count < 1){
      clearItem(itemName);
      return;
    }
    setGroceryList(currentGroceryList);
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
      
      <h1>Your Grocery List ({state.numberOfItems})</h1>

      <div className="App-options">
        <AddItem onAddItem={addItem}/>
        <Button onClick={clearAllItems}>Clear All</Button>
      </div>

      <div className="App-list">
        {Object.entries(groceryList).map(([itemName, itemDetails]) =>
          <ListItem 
            onClick={togglePurchaseItem}
            onClear={clearItem}
            onIncrement={incrementItem}
            onDecrement={decrementItem}
            key={itemName} {...itemDetails}>{itemName}</ListItem>
        )}
      </div>

      {!state.numberOfItems && <div className="empty-list-filler"> This list appears as empty as your fridge. Go on fill 'em both. </div>}

    </div>
  );
}

export default App;
