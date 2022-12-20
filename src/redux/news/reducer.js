const initialState = {
    news: [],
    favourite: false,
    favouriteNews: [],
    currentPage: 1,
    totalPages: 0,
    category: '',
}

const newsReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_NEWS_SUCCESS':
            return {...state, news: [...action.payload]};
        
        case 'GET_CATEGORIES':
            if(state.category !== action.payload) {
                return {...state, category: action.payload, currentPage: 1}
            }
            return {...state, category: action.payload};

        case 'GET_TOTAL_PAGES':
            return {...state, totalPages:  Math. round(action.payload / 10)};

        case 'GET_CURRENT_PAGE':
            return {...state, currentPage: Number(action.payload)};

        case 'ADD_NEWS_TO_FAVOURITE': 
            const favourites = state.favouriteNews.filter(item => item.title !== action.payload.title);
            return {...state, favourite: true, favouriteNews: [...favourites, action.payload]};   

        case 'REMOVE_NEWS_TO_FAVOURITE':
            const filteredFavouritesNews = state.favouriteNews.filter(item => action.payload !== item.title);
            return {...state, favourite: false, favouriteNews: [...filteredFavouritesNews]};

            default:
                return state;
    }
}

export default newsReducer;