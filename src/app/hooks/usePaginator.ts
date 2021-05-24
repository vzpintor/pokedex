import { useReducer } from 'react';
import { IPaginatorState } from '@reduxInterfaces/paginatorStateInterface';

interface IAction<T> {
  type: string;
  payload: T;
}

const ACTIONS = {
  UPDATE_PAGE: 'UPDATE_PAGE',
  CHANGE_LIMIT: 'CHANGE_LIMIT',
  SET_LOAD_MORE: 'SET_LOAD_MORE',
};

const initialState: IPaginatorState = {
  offset: 0,
  limit: 50,
  loadMore: false,
};

const reducer = (state: IPaginatorState, action: IAction<any>) => {
  switch (action.type) {
    case ACTIONS.UPDATE_PAGE:
      return {
        ...state,
        offset: action.payload,
        loadMore: false,
      };
    case ACTIONS.CHANGE_LIMIT:
      return {
        ...state,
        limit: action.payload,
      };
    case ACTIONS.SET_LOAD_MORE:
      return {
        ...state,
        loadMore: action.payload,
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
