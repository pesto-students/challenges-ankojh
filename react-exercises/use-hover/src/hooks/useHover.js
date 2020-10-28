import React, { useEffect, useState } from 'react'

function useHover(){

  const [hoverState, setHoverState] = useState(false);
  const [element, setElement] = useState(null);

  const ref = (element)=>{
    setElement(element);
  }

  useEffect(()=>{
    function onMouseOverHandler(){
      setHoverState(true);
    }

    function onMouseLeaveHandler(){
      setHoverState(false);
    }

    if(element){
      element.addEventListener('mouseover', onMouseOverHandler);
      element.addEventListener('mouseleave', onMouseLeaveHandler);
    }

    return ()=>{
      if(element){
        element.removeEventListener('mouseover', onMouseOverHandler);
        element.removeEventListener('mouseleave', onMouseLeaveHandler);
      }
    }

  })


  return [
    ref,
    hoverState
  ]
}

export default useHover;