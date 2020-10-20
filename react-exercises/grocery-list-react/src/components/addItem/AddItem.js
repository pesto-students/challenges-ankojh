import React, { useState } from 'react';
import Button from '../button/Button';
import './AddItem.css'

const AddItem = ({addItem}) => {

  const [itemName, setItemName] = useState('')

  function buttonClicked(){
    itemName && addItem && addItem(itemName)
    setItemName('');
  }

  return (
    <div className="App-AddItem"> 
      <input value={itemName} onChange={e=>setItemName(e.target.value)} />
      <Button onClick={buttonClicked}>Add</Button>
    </div>
  );
};

export default AddItem;