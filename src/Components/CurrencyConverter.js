import React, {Component} from 'react'
import CurrencyDisplay from './CurrencyDisplay'

const withCurrency = (BaseComponent) => {
  class Currency extends Component {
    state = {
      currencyChosen: false,
      selectedCurrency: 'Select Currency',
      amount: 0
    }

    handleAmountIncrease = () => {
      this.setState((prevState) => {
        return {
          amount: prevState.amount
        }
      })
    }

    handleAmountDecrease = () => {
      this.state.amount > 0 &&
      this.setState((prevState) => {
        return {
          amount: prevState.amount - 1
        }
      })
    }

    handleOptionSelect = (evt) => {
      const userValue = evt.target.value
      this.setState(() => {
        return {
          selectedCurrency: userValue,
          currencyChosen: userValue === 'Selected Curreny' ? false : true
        }
      })
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
            <button className='add' onClick={this.handleAmountIncrease}>+</button>
            <button className='minus' onClick={this.handleAmountDecrease}>-</button>
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

const ExchangedCurrency = withCurrency(CurrencyDisplay)

export default ExchangedCurrency