import React, { Component } from 'react'
import Typical from 'react-typical'
import './text.css'

const steps = [
  
  'Parabéns.', 2000,
  "Você terá preferência no lançamento!",2000,
    
  ]; 
export default class TextAnimation extends Component {
  render () {
    return (
      <div className="textAnimation">
        <Typical wrapper="span" steps={steps}  className={'caca'} loop={Infinity} />
      </div>
    )
  }
}