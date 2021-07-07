import axios from 'axios';
import { getConfig } from 'config/config';

export const client = axios.create({
  baseURL: getConfig().serverUrl,
  timeout: 50000,
});
