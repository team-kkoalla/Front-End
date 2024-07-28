import { INCREMENT, DECREMENT, INCREASE, TOGGLE } from '../actionTypes/counterTypes';

export const increment = () => ({
  type: INCREMENT
});

export const decrement = () => ({
  type: DECREMENT
});

export const increase = (amount) => ({
  type: INCREASE,
  amount
});

export const toggle = () => ({
  type: TOGGLE
});
