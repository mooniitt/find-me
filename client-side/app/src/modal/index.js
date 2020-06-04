import { TABLE, S, T } from "src/constants/thing";
import { bottomMixed, canMixed, fillTable } from "src/utils";

export const modal = {
  namespace: "table",
  state: {
    table: TABLE,
    currentBlock: S,
    currentBlockIndex: 0,
    nextBlock: T,
    nextBlockIndex: 0,
    posX: 4,
    posY: 0
  },
  effects: {
    *table({ payload }, { call, put }) {
      yield put({
        type: "save",
        payload: { table: payload.table }
      });
    },
    *down({ payload }, { call, put }) {
      yield put({ type: "save", payload: { posY: 1 } });
      yield put({ type: "fill" });
    },
    *start({ payload }, { call, put, select }) {
      yield put({ type: "fill" });
    },
    *fill({ payload }, { call, put, select }) {
      const {
        table,
        currentBlock,
        posX,
        posY,
        currentBlockIndex
      } = yield select(state => state.table);
      console.log(posY);
      const t = fillTable(table, currentBlock[currentBlockIndex], posX, posY);
      yield put({
        type: "save",
        payload: {
          table: t
        }
      });
    }
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    }
  }
};
