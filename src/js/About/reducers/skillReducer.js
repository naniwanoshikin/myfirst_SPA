import { requestStates } from '../constants';

// アクション
export const actionTypes = {
  initial: 'INITIAL',
  fetch: 'FETCHING', // 取得中
  success: 'FETCH_SUCCESS', // 取得成功
  error: 'FETCH_ERROR'
};

// 初期ステート
export const initialState = {
  languageList: [], // 言語リスト
  requestState: requestStates.idle,
}

export const skillReducer = (
  state, action
) => {
  switch (action.type) {
    case actionTypes.initial: {
      return {
        languageList: [],
        requestState: requestStates.initial
      }
    }
    case actionTypes.fetch: {
      return {
        ...state,
        requestState: requestStates.loading
      }
    }
    case actionTypes.success: {
      return {
        // レスポンスデータそのものを引き出す
        languageList: action.payload.languageList,
        requestState: requestStates.success
      }
    }
    // APIからの返り値がない場合など
    case actionTypes.error: {
      return {
        languageList: [],
        requestState: requestStates.error
      }
    }
    default: {
      throw new Error();
    }
  }
};
