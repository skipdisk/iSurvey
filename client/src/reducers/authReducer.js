const initialState = {};

const authReducer = (state = initialState , action) => {
    console.log(action);
    switch (action.type) {
        case 'FETCH_USER':
            return {
                ...state
            }
        default:
            return state
    }
}



export default authReducer;