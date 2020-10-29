import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


function withState(stateKey, stateSetterKey, initialValue) {  
  return (component) => {
    return class WithState extends Component{

      state = {value: initialValue};

      updateState(stateOrSetState){
        if(typeof stateOrSetState === 'function' ){
          this.setState({ value: stateOrSetState(this.state.value) });
        }
        else{
          this.setState({value : stateOrSetState});
        }
      }

      render(){
  //       // return React.cloneElement(component, {
  //       //   [stateKey]: this.state.value,
  //       //   [stateSetterKey]: this.updateState.bind(this)
  //       // })
        
        // return component({
        //   [stateKey]: this.state.value,
        //   [stateSetterKey]: this.updateState.bind(this)
        // })

        return React.createElement(component, {
          [stateKey]: this.state.value,
          [stateSetterKey]: this.updateState.bind(this)
        } )
      }
    }
  }
}


function withHandlers(handlers){
  return (component)=>{
    return class WithHandlers extends Component{
      render(){
        const curriedHandlers = {}

        for(let handlerKey of Object.keys(handlers)){
          curriedHandlers[handlerKey] = handlers[handlerKey](this.props);
        }

        return React.createElement(component, { ...curriedHandlers})
      }
    }
  }
}





function App() {

  const stateEnhancer = withState('value', 'updateValue', '');
  const handlers = withHandlers({
    onChange: (props) =>{return (event) => {
      props.updateValue(event.target.value);
    }},
    onSubmit: (props) => (event) => {
      event.preventDefault();
      console.log(props.value);
    },
  });

  function FormComponent({ value, onChange, onSubmit }) {
    return <form onSubmit={onSubmit}>
      <label>
        Value
      <input type="text" value={value} onChange={onChange} />
      </label>
      <input type="submit" value="Click" />
    </form>
  }

  const FormWithHandler = handlers(FormComponent);
  const Form = stateEnhancer(FormWithHandler);

  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
