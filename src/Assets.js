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
    
    return (
    <div id="assets">
      <h1>Assets on file</h1>
      <table className='mETable'>
            <tr className="mEtr">
              <th className="mETh">Asset Type</th>
              <th className="mETh">Total Amount</th>
            </tr>
            <tr className="mEtr">
              <td class="assetType">Checking Accounts</td>
              <td><input type="text" value={cAAmount} onChange={onChangeCHK}></input></td>
            </tr>
            <tr className="mEtr">
              <td class="mEdebtType">Savings Accounts</td>
              <td class="mEInputField"><input type="text" value={sAAmount} onChange={onChangeSAV}></input></td>
            </tr>
            <tr className="mEtr">
              <td class="mEdebtType">IRAs/401Ks</td>
              <td class="mEInputField"><input type="text" value={rEAmount} onChange={onChangeRET}></input></td>
            </tr>
            <tr className="mEtr">
              <td class="mEdebtType">Gifts</td>
              <td class="mEInputField"><input type="text" value={gAmount} onChange={onChangeGFT}></input></td>
            </tr>
            <tr className="mEtr">
              <td class="mEdebtType"></td>
              <td class="mEInputField"><button>Calculate Minimum Payment Total</button></td>
              <td class="mEInputField"><button>Calculate Total Debt Amount</button></td>
            </tr>
            <tr className="mEtr">
              <td class="mEdebtType">Totals</td>
              <td class="mEInputField"><label>Total Assets on file: $</label><label id="mETotalMonthly" class="mEmonthly"></label></td>
            </tr>
        </table>
    </div>
  )
}
