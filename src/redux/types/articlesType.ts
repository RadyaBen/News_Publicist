import { IArticle } from '../../types/articles';

export interface ArticlesState {
	articles: IArticle[],
	articlesLoadingStatus: string,
};

export interface SearchArticlesState {
	filteredArticles: IArticle[],
	searchInput: string
};

export enum ArticlesActionTypes {
	ARTICLES_FETCHING = 'ARTICLES_FETCHING',
	ARTICLES_FETCHED = 'ARTICLES_FETCHED',
	ARTICLES_FETCHING_ERROR = 'ARTICLES_FETCHING_ERROR',
	FILTERED_VALUE_ARTICLES = 'FILTERED_VALUE_ARTICLES',
	SEARCH_INPUT_VALUE = 'SEARCH_INPUT_VALUE'
};

interface ArticlesFetching {
	type: typeof ArticlesActionTypes.ARTICLES_FETCHING
};

interface ArticlesFetched {
	type: typeof ArticlesActionTypes.ARTICLES_FETCHED,
	payload: IArticle[]
};

interface ArticlesFetchingError {
	type: typeof ArticlesActionTypes.ARTICLES_FETCHING_ERROR
};

interface FilteredArticlesValue {
	type: typeof ArticlesActionTypes.FILTERED_VALUE_ARTICLES,
	payload: IArticle[];
};

interface SearchInputValue {
	type: typeof ArticlesActionTypes.SEARCH_INPUT_VALUE,
	payload: string;
};

export type ArticlesAction = ArticlesFetching | ArticlesFetched | ArticlesFetchingError;
export type SearchArticlesAction = FilteredArticlesValue | SearchInputValue;