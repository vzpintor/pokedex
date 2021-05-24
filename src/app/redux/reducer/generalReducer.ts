import { SET_LOADING } from '@actions/general/generalTypes';
import { IGeneralState } from '@reduxInterfaces/generalInterface';

const INITIAL_STATE: IGeneralState = {
  loading: false,
};

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case SET_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    default:
      return state;
  }
};
