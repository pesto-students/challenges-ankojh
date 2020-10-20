import React from 'react';
import './ListItem.css'

const ListItem = ({children, count, isPurchased, onClick}) => {

  function itemClicked(){
    onClick && onClick(children);
  }


  return (
    <div 
      onClick={itemClicked}
      className={`App-ListItem ${isPurchased ? 'item-purchased' : ''}`}>
      {children} {count > 1 ? `(${count})`: '' }
    </div>
  );
};

export default ListItem;