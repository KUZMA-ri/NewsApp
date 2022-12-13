const InitialState = {
    search: null,
    search_favourite: null
}

const searchReducer = (state = InitialState, action) => {
    switch(action.type) {
        case 'SEARCH': 
            return {...state, search: action.payload};

        case 'SEARCH_FAVOURITE':
            return {...state, search_favourite: action.payload};

        default: 
            return state;
    }
};

export default searchReducer;