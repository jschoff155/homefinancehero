import React, { useContext } from 'react'
import Statusbar from './Statusbar';
import Propertyinfo from './Propertyinfo';
import MonthlyExpenses from './MonthlyExpenses';
import Income from './Income';
import Assets from './Assets';

export default function Operator(props) {
  const tAOTF = (props.tAssets);
  return (
    <div>
        <p></p>
        <Statusbar assetsOnFile={tAOTF}/>
    </div>
  )
}
