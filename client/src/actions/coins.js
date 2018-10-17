import axios from 'axios';
export const COINS = 'COINS';
export const ADD_COIN = 'ADD_COIN';
export const REMOVE_COIN = 'REMOVE_COIN';

export const addCoin = (coin) => {
  return (dispatch) => {
    axios.post('/api/coins', {coin})
      .then( ({ data, headers }) => dispatch({ type: ADD_COIN, coin: data, headers}))
  }
}