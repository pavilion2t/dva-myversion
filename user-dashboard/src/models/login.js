import * as loginService from '../services/login';

export default {

  namespace: 'login',

  state: {},

  subscriptions: {
  },

  effects: {
    *login({ payload }, { call }) {
      yield call(loginService.login, { ...payload });
    },
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },

};
