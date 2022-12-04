export const GET_NEWS_SUCCESS = (news) => ({type: 'GET_NEWS_SUCCESS', payload:news});
export const GET_MORE_NEWS = (news) => ({type: 'GET_MORE_NEWS', payload: news});
export const ADD_NEWS_TO_FAVOURITE = (oneNews) => ({type: 'ADD_NEWS_TO_FAVOURITE', payload: oneNews});
export const REMOVE_NEWS_TO_FAVOURITE = (title) => ({type: 'REMOVE_NEWS_TO_FAVOURITE', payload: title});
