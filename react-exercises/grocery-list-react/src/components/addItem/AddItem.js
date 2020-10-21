import React, { useState } from 'react';
import Button from '../button/Button';
import './AddItem.css'

const AddItem = ({onAddItem}) => {

  const [itemName, setItemName] = useState('')

  function buttonClicked(){
    itemName && onAddItem && onAddItem(itemName)
    setItemName('');
  }

  function keyDowned(event){
    if(event.keyCode === 13){
      buttonClicked();
    }
  }

  return (
    <div className="App-AddItem"> 
      <input 
        onKeyDown={keyDowned}
        value={itemName}
        onChange={e=>setItemName(e.target.value)}
        placeholder="Write New Items... "
         />
      <Button disabled={!itemName.length} onClick={buttonClicked}>Add</Button>
    </div>
  );
};

export default AddItem;