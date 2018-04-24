import * as regiserService from '../services/register';

export default {

  namespace: 'register',

  state: {},

  subscriptions: {
  },

  effects: {
    *send({ payload }, { call }) {
      yield call(regiserService.sendAuthCode, { ...payload });
    },

    *signUp({ payload }, { call }) {
      yield call(regiserService.getRegister, { ...payload });
    },
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },

};
