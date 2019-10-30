const initialState = {};

const authReducer = (state = initialState , action) => {
    switch (action.type) {
        case 'FETCH_USER':
            return action.payload || false;
        case 'SIGN_IN':
            return action.payload || false;
        default:
            return state
    }
}



export default authReducer;