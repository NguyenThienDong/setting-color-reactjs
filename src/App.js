import React, {useState} from 'react';
import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/SizeSetting';
import Reset from './components/Reset';
import Result from './components/Result';
import './App.css';

export default function App() {
  const [state, setState] = useState({
    color: 'red',
    fontSize: 12
  })

  const setColor = (color) => {
    setState({
      ...state,
      color: color
    })
  }

  const onChangeSize = (value) => {
    setState({
      ...state,
      fontSize: (state.fontSize + value >= 8 && state.fontSize + value <= 36) ? state.fontSize + value : state.fontSize
    })
  }
  const onResetDefault = (value) => {
    if(true){
      setState({
        color: 'red',
        fontSize: 12
      })
    }
  }

  return (
    <div className='App'>
      <div className="container">
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <ColorPicker color={state.color} setColor={(color) => setColor(color)}/>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <SizeSetting fontSize={state.fontSize} onChangeSize={(value) => onChangeSize(value)}/>
            <Reset onResetDefault={(value) => onResetDefault(value)}/>
          </div>
        </div>
        <Result color={state.color} fontSize={state.fontSize}/>
      </div>
      
    </div>
  )
}