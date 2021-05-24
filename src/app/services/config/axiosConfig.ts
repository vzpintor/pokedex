import axios, { AxiosRequestConfig } from 'axios';
import apiConfig from './apiConfig';

const { https, baseUrl } = apiConfig;

const axiosConfig: AxiosRequestConfig = {
  baseURL: baseUrl,
  httpsAgent: https,
};

const axiosApp = axios.create(axiosConfig);

export default axiosApp;
