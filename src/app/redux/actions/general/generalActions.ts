import { SET_LOADING } from '@actions/general/generalTypes';

export function setLoading(loading: boolean) {
  return {
    type: SET_LOADING,
    payload: loading,
  };
}
