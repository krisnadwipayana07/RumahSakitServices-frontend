import axios from 'axios';
import projectConfig from '../project-config';

const baseAPI = axios.create({ baseURL: `${projectConfig.SERVER_URL}/api` });

export default baseAPI;
