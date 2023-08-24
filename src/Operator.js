import React from 'react'
import Statusbar from './Statusbar';

export default function Operator(props) {
    const tlAmount = props.tLoanAmount

  return (
    <div>
        <p></p>
      <Statusbar tLAmount={tlAmount}/>
    </div>
  )
}
