import React, {Component} from 'react'

export default function withCurrency(BaseComponent){
  class Currency extends Component {
    constructor(){
      super()
      this.state = {
        currencyChosen: false,
        selectedCurrency: 'Select Currency',
        amount: 0
      }
    }

    render(){
      const currencyData = [
        { name: 'Japanese Yen', symbol: '¥', rate: 113.6, id: 0 },
        { name: 'British Pound', symbol: '£', rate: 0.77, id: 1 },
        { name: 'Canadian Dollar', symbol: 'CAD', rate: 1.32, id: 2 },
        { name: 'Mexican Peso', symbol: 'Mex$', rate: 20.41, id: 3 },
        { name: 'Swiss Franc', symbol: 'Fr.', rate: 1.01, id: 4 }
      ]

      const currencyOptions = currencyData.map((currency, i) => {
        <option key={i} value={i}>
          {currency.name}
        </option>
      })

      return (
        <div>
          <select value={this.state.selectedCurrency}>
            <option value='Select Currency'>
              Select Currency
            </option>
          </select>
          <div>
            <button className='add'>+</button>
            <button className='minus'>-</button>
          </div>
          <BaseComponent
            currency={currencyData[this.state.selectedCurrency]}
            amount={this.state.amount}
          />
        </div>
      )
    }
  }
}