import baseAPI from './base-api';

const RegistrationAPI = {
  insertSubscription: async ({ email }) => {
    return baseAPI.post('/registration-subs', { email: email });
  },
  insertCandidate: async (data) => {
    return baseAPI.post('/candidate', data);
  }
};

export default RegistrationAPI;
