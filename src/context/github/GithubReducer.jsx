//reducer function.
const GithubReducer = (state, action) => {

    //switch case to switch check which of action is to be performed.
    switch (action.type) {
        case "GET_USERS" :
            return{
                ...state,
                users: action.payload,
                loading: false,
            }
        case "GET_USER":
            return {
                ...state,
                   user: action.payload,
                   loading: false
           }
        case "GET_REPOS":
            return {
                ...state,
                repos: action.payload,
                loading: false
        }
        case "SET_LOADING":
            return {
                ...state,
                loading: true
            }
        case "CLEAR_USERS":
            return {
                ...state,
                users: []
            }
        default:
            return state;
    }
}   

//exporting the function
export default GithubReducer