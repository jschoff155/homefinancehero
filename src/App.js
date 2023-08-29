import React from 'react'
import Statusbar from './ChildComponents/Statusbar';
import Propertyinfo from './ChildComponents/Propertyinfo';
import MonthlyExpenses from './ChildComponents/MonthlyExpenses';
import Navigation from './ChildComponents/Navigation';
import Income from './ChildComponents/Income';
import Assets from './ChildComponents/Assets';
import Financing from './ChildComponents/Financing';

class App extends React.Component {

  state = {
    name:"",
  }
  handleAssetCallback = (assetData) =>{
    this.setState({totalAssets: assetData})
  }
  handleLoanCallback = (loanData) =>{
    this.setState({totalLoanAmount: loanData})
  }
  render() {
    const {totalAssets} = this.state;
    const {totalLoanAmount} = this.state;

    return(
      <div>
        <Assets parentCallback={this.handleAssetCallback}/>
        {totalAssets}
        <Propertyinfo parentCallback={this.handleLoanCallback}/>
        {totalLoanAmount}

        <>
        <h1>Home Finance Hero </h1>
        <Navigation/>
        <Statusbar totalAssets={totalAssets} totalLoanAmount={totalLoanAmount}/>
        <Propertyinfo/>
        <Income/>
        <MonthlyExpenses/>
        <Assets />
        <Financing/>
        </>
      </div>
      
    )
  }
}
export default App
