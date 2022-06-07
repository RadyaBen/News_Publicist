import { combineReducers } from 'redux';

import { articles } from '../reducers/articles';
import { searchArticles } from '../reducers/searchArticles';

export const rootReducer = combineReducers({
	articles: articles,
	searchArticles: searchArticles
});

export type RootState = ReturnType<typeof rootReducer>;