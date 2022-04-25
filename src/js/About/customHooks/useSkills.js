import { useEffect, useReducer } from 'react';
import axios from 'axios';
import { skillReducer, initialState, actionTypes } from '../reducers/skillReducer';
import { requestStates } from '../constants';

// カスタムフックス
export const useSkills = () => {
  const [state, dispatch] = useReducer(skillReducer, initialState);

  const fetchReposApi = () => {
    axios.get('https://api.github.com/users/naniwanoshikin/repos')
      .then((response) => {
        // 重複もnullも許可した言語リスト ['JavaScript', 'JavaScript', 'Ruby', null]
        const languageList = response.data.map(res => res.language)
        // [
        // { language: 'JavaScript', count: 2 },
        // { language: 'Go', count: 1 },
        // ]
        const countedLanguageList = generateLanguageCountObj(languageList)
        dispatch({
          type: actionTypes.success,
          payload: { languageList: countedLanguageList }
        });
      })
      .catch(() => {
        dispatch({
          type: actionTypes.error
        });
      });
  }

  // APIを叩くことを責任として負う
  useEffect(() => {
    // ローディングしていたらAPIを叩く
    if (state.requestState !== requestStates.loading) { return; }
    fetchReposApi();
    console.log('a');
  }, [state.requestState]);

  useEffect(() => {
    dispatch({ type: actionTypes.fetch });
  }, []);

  const generateLanguageCountObj = (allLanguageList) => {
    // nullを取り除いた配列 ['JavaScript', 'JavaScript', 'Ruby']
    const notNullLanguageList = allLanguageList.filter(language => language != null);
    // 重複を取り除いた配列 ['JavaScript', 'Ruby']
    const uniqueLanguageList = [...new Set(notNullLanguageList)]

    return uniqueLanguageList.map(item => {
      return {
        language: item,
        // 同じ要素の数
        count: allLanguageList.filter(language => language === item).length
      }
    });
  };

  // 言語の使用（登場）回数 = n% (引数: 採用リポジトリ数)
  const DEFAULT_MAX_PERCENTAGE = 100;
  const LANGUAGE_COUNT_BASE = 10;
  const converseCountToPercentage = (languageCount) => {
    if (languageCount > LANGUAGE_COUNT_BASE) {
      return DEFAULT_MAX_PERCENTAGE;
    }
    return languageCount * LANGUAGE_COUNT_BASE;
  };

  // スキル度合い(n%)が高い順に並べ変え 昇順
  const sortedLanguageList = () => (
    state.languageList.sort((firstLang, nextLang) => nextLang.count - firstLang.count)
  )

  // コンポーネント側で必要なもの
  return [
    sortedLanguageList,
    state.requestState,
    converseCountToPercentage
  ];
}
