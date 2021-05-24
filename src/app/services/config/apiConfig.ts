import { IApiConfig } from '@shared/interface/IApiConfig';

const { baseUrl, https } = require('@environments/env.js');

const apiConfig: IApiConfig = {
  https: https,
  baseUrl: baseUrl,
};

export default apiConfig;
