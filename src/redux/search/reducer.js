const InitialState = {
    search: null
}

const searchReducer = (state = InitialState, action) => {
    switch(action.type) {
        case 'SEARCH': 
            return {...state, search: action.payload};

        default: 
            return state;
    }
};

export default searchReducer;