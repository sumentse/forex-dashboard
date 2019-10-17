import { UPDATE_ASK, UPDATE_CURRENCY, UPDATE_LP, UPDATE_BID } from './types';

export const initialState = {
  currencies: [],
  lps: [],
  bid: {
    min: null,
    max: null,
    minQty: null,
    maxQty: null
  },
  ask: {
    min: null,
    max: null,
    minQty: null,
    maxQty: null
  }
};

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_CURRENCY:
      return {
        ...state,
        currencies: action.payload
      };
    case UPDATE_LP:
      return {
        ...state,
        lps: action.payload
      };
    case UPDATE_BID:
      return {
        ...state,
        bid: {
          ...state.bid,
          ...action.payload
        }
      };
    case UPDATE_ASK:
      return {
        ...state,
        ask: action.payload
      };
    default:
      return state;
  }
};
