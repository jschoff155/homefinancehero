import React, { useState, useEffect } from "react";
import "../StyleSheets/Assets.css";

export default function AssetsArea({ onChangeAssetTotal }) {
  const [cAAmount, setcAAmount] = useState("");
  const [sAAmount, setsAAmount] = useState("");
  const [rEAmount, setrEAmount] = useState("");
  const [gAmount, setgAmount] = useState("");

  const onChangeCHK = (event) => setcAAmount(event.target.value);
  const onChangeSAV = (event) => setsAAmount(event.target.value);
  const onChangeRET = (event) => setrEAmount(event.target.value);
  const onChangeGFT = (event) => setgAmount(event.target.value);

  let totalcAAmount = parseInt(cAAmount);
  let totalsAAmount = parseInt(sAAmount);
  let totalrEAmount = parseInt(rEAmount);
  let totalgAmount = parseInt(gAmount);

  const assetValues = [
    totalcAAmount || null,
    totalsAAmount || null,
    totalrEAmount || null,
    totalgAmount || null,
  ];

  const totalAssets = assetValues.reduce((accumulator, currentValue) => {
    return currentValue !== null ? accumulator + currentValue : accumulator;
  }, 0);

  useEffect(() => {
    onChangeAssetTotal(totalAssets);
  });

  const assetTypeLabel = [
    {
      title: "Checking Account Value",
      onChangeValue: cAAmount,
      onChangeFunction: onChangeCHK,
    },
    {
      title: "Savings Account Value",
      onChangeValue: sAAmount,
      onChangeFunction: onChangeSAV,
    },
    {
      title: "401K/IRA Value",
      onChangeValue: rEAmount,
      onChangeFunction: onChangeRET,
    },
    {
      title: "Gift Funds",
      onChangeValue: gAmount,
      onChangeFunction: onChangeGFT,
    },
  ];
  const assetUI = (title, onChangeValue, onChangeFunction) => {
    return (
      <tr className="mEtr">
        <td class="mEdebtType">{title}</td>
        <td>
          <input
            type="text"
            value={onChangeValue}
            onChange={onChangeFunction}
          ></input>
        </td>
      </tr>
    );
  };

  return (
    <div id="assets">
      <h1>Assets on file</h1>
      <label>
        Total Assets on file: ${totalAssets && parseInt(totalAssets).toFixed(2)}
      </label>
      <table className="mETable">
        <tr className="mEtr">
          <th className="mETh">Asset Type</th>
          <th className="mETh">Total Amount</th>
        </tr>
        {assetTypeLabel.map((input) =>
          assetUI(input.title, input.onChangeValue, input.onChangeFunction)
        )}
      </table>
    </div>
  );
}
