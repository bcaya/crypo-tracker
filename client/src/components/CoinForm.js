import React from 'react';
import { connect } from 'react-redux';
import {addCoin} from '../actions/coins.js'

class CoinForm extends React.Component {
  state = { coin: '' }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value.toLowerCase().replace(' ', '')})
  }


  handleSubmit = (e) => {
    e.preventDefault();
    const {dispatch} = this.props;
    const {coin} = this.state;
    dispatch(addCoin(coin))
    this.setState({ coin:''})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          label="Watch Coin"
          value={this.state.coin}
          onChange={this.handleChange}
          name="coin"
          required
        />
        <button>Add Coin</button>
      </form>
    )
  }
}
export default connect()(CoinForm);