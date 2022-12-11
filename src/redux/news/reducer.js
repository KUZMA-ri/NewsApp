const initialState = {
    news: [],
    favourite: false,
    favouriteNews: [],
    currentPage: 0,
    fetching: true,
    totalPages: 5
}

const newsReducer = (state = initialState, action) => {
    switch(action.type) {
        case "GET_NEWS_SUCCESS":
            console.log('initial', action.payload);
            return {...state, news: [...action.payload]}

        // case "GET_MORE_NEWS":
        //     const newCurrentPage = ++state.currentPage;
        //     const newTotalPages = ++state.totalPages;
        //     return {...state, news: state.news, currentPage: newCurrentPage, totalPages: newTotalPages, fetching: action.payload};

        case 'ADD_NEWS_TO_FAVOURITE': 
            const favourites = state.favouriteNews.filter(item => item.title !== action.payload.title);
            return {favourite: true, favouriteNews: [...favourites, action.payload], news: state.news};   

        case 'REMOVE_NEWS_TO_FAVOURITE':
            const filteredFavouritesNews = state.favouriteNews.filter(item => action.payload !== item.title);
            return { favourite: false, favouriteNews: [...filteredFavouritesNews], news: state.news};

            default:
                return state;
    }
}

export default newsReducer;