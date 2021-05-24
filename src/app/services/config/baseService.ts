import { Alert } from 'react-native';
import { AxiosError, AxiosResponse } from 'axios';
import axios from './axiosConfig';
import { STATUS } from '@services/config/reqStatus';
import { MESSAGES } from '@services/config/messages';

export const genericError = async (
  error: AxiosError,
  showAlert: boolean = false,
): Promise<AxiosResponse | any> => {
  if (error) {
    if (error.response) {
      const { response } = error;
      const { message } = response.data;

      if (showAlert) {
        Alert.alert('', message);
      }

      if (response.status === STATUS.INTERNAL_SERVER) {
        Alert.alert('', MESSAGES.INTERNAL_SERVER);
      }

      return response;
    }
  }
};

export async function get(
  url: string,
  options?: any,
  showAlert?: boolean,
): Promise<AxiosResponse> {
  try {
    return await axios.get(url, options);
  } catch (error) {
    return await genericError(error, showAlert);
  }
}
