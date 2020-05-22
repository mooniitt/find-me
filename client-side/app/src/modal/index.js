import { TABLE, S, T } from "src/constants/thing";

export const modal = {
  namespace: "table",
  state: {
    table: TABLE,
    currentBlock: S,
    nextBlock: T
  },
  effects: {
    *table({ payload }, { call, put }) {
      yield put({
        type: "save",
        payload: payload.table
      });
    }
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, table: payload };
    }
  }
};
