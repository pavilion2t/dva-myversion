import * as regiserService from '../services/register';

export default {

  namespace: 'register',

  state: {},

  subscriptions: {
  },

  effects: {
    *send({ payload }, { call, put }) {
      const { data } = yield call(regiserService.sendAuthCode, {...payload})
      if(data.code === 0){
        const {} = data.data;
      }
    },
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },

};
