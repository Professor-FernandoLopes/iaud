import React, { Component } from 'react'
import Typical from 'react-typical'
import "./effect.css"

const steps = [
  
  'Lançamento Instruaud.', 2000,
  'Uma empresa consolidada na área da saúde.',2000,
  "Agora na blockchain", 2000
  
]; 
export default class TextAnimation2 extends Component {
  render () {
    return (
      <div className="textAnimation">
        <Typical wrapper="span" steps={steps}  className={'textAnimation'} loop={Infinity} />
      </div>
    )
  }
}