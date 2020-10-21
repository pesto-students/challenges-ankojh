import React from 'react';
import './ListItem.css'

const ListItem = ({ children, count, isPurchased, onClick, onIncrement, onDecrement, onClear }) => {

  function itemClicked() {
    onClick && onClick(children);
  }

  function incrementItem(event) {
    event.stopPropagation();
    onIncrement && onIncrement(children)
  }

  function decrementItem(event) {
    event.stopPropagation();
    onDecrement && onDecrement(children)
  }

  function clearItem(event) {
    event.stopPropagation();
    onClear && onClear(children);
  }


  return (
    <div
      onClick={itemClicked}
      className={`App-ListItem ${isPurchased ? 'item-purchased' : ''} ${count > 1 ? 'item-multiple' : ''}`}>
      <div className="multiple-background"></div>
      <div className="item-name">{children} {count > 1 ? `(${count}) ` : ''}</div>
      <div className="item-options">
        <div className="item-incrementor">
          <span onClick={decrementItem}>-</span>
          <span onClick={incrementItem}>+</span>
        </div>
        <span onClick={clearItem} className="item-delete">x</span>
      </div>
    </div>
  );
};

export default ListItem;