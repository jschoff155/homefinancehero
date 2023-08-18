import React, { useState } from 'react'
import './StyleSheets/Assets.css'

export default function Assets() {
    const [cAAmount, setcAAmount] = useState("");
    const [sAAmount, setsAAmount] = useState("");
    const [rEAmount, setrEAmount] = useState("");
    const [gAmount, setgAmount] = useState("");

    const onChangeCHK = event => setcAAmount(event.target.value);
    const onChangeSAV = event => setsAAmount(event.target.value);
    const onChangeRET = event => setrEAmount(event.target.value);
    const onChangeGFT = event => setgAmount(event.target.value);
    
    const totalAssets = (cAAmount && sAAmount && rEAmount && gAmount && (parseInt(cAAmount)+parseInt(sAAmount)+parseInt(rEAmount)+parseInt(gAmount)));

    return (
    <div id="assets">
      <h1>Assets on file</h1>
      <label>Total Assets on file: ${totalAssets && (parseInt(totalAssets)).toFixed(2)}</label>
      <table className='aTable'>
            <tr className="atr">
              <th className="aTh">Asset Type</th>
              <th className="aTh">Total Amount</th>
            </tr>
            <tr className="atr">
              <td class="assetType">Checking Accounts</td>
              <td><input type="text" value={cAAmount} onChange={onChangeCHK}></input></td>
            </tr>
            <tr className="atr">
              <td class="aLabel">Savings Accounts</td>
              <td class="aInputField"><input type="text" value={sAAmount} onChange={onChangeSAV}></input></td>
            </tr>
            <tr className="atr">
              <td class="aLabel">IRAs/401Ks</td>
              <td class="aInputField"><input type="text" value={rEAmount} onChange={onChangeRET}></input></td>
            </tr>
            <tr className="atr">
              <td class="aLabel">Gifts</td>
              <td class="aInputField"><input type="text" value={gAmount} onChange={onChangeGFT}></input></td>
            </tr>
        </table>
    </div>
  )
}
