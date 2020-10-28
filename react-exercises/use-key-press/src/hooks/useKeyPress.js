import { useEffect, useState } from 'react'

function useKeyPress(key, once = true, element = window) {

  const [keyPressed, setKeyPressed] = useState({ state: false }) //? If its not an object, <App /> is not rendered again for same value;

  useEffect(() => {
    function handleKeyPress(event) {
      const eventKey = event.key.toLowerCase()
      if (eventKey === key || `<${eventKey}>` === key) { //* Not a strict comparison, useKeyPress('enter' | '<enter>')  will pass
        setKeyPressed({ state: true });
        if (once) {
          element.removeEventListener('keypress', handleKeyPress); //* Once pressed
        }
      }
    }
    element.addEventListener('keypress', handleKeyPress); //? keyup
    return () => {
      element.removeEventListener('keypress', handleKeyPress);//* Just in case you never press it
    }
  }, [])


  return keyPressed;
}

export default useKeyPress;