const intitialState = {
    theme: 'light',
}

const themeReducer = (state = intitialState, action) => {
    switch(action.type) {
        case 'CHANGE_THEME':
            return {...state, theme: action.payload};
        
        default:
            return state;
    }
};

export default themeReducer;