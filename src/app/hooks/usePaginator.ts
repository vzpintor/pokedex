import { useReducer } from 'react';
import { IPaginatorState } from '@reduxInterfaces/paginatorStateInterface';

const { itemsPerPage } = require('@environments/env');

interface IAction<T> {
  type: string;
  payload: T;
}

const ACTIONS = {
  UPDATE_PAGE: 'UPDATE_PAGE',
  CHANGE_LIMIT: 'CHANGE_LIMIT',
};

const initialState: IPaginatorState = {
  offset: 0,
  limit: itemsPerPage,
};

const reducer = (state: IPaginatorState, action: IAction<any>) => {
  switch (action.type) {
    case ACTIONS.UPDATE_PAGE:
      return {
        ...state,
        limit: action.payload,
      };
    case ACTIONS.CHANGE_LIMIT:
      return {
        ...state,
        limit: action.payload,
      };
    default:
      return state;
  }
};

export default function usePaginator() {
  const [paginatorState, paginatorDispatch] = useReducer(reducer, initialState);
  return {
    paginatorState,
    paginatorDispatch,
    ACTIONS,
  };
}
