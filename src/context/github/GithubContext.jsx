import { createContext, useReducer } from "react";
import GithubReducer from "../../context/github/GithubReducer"

//creating the context
const GithubContext = createContext()

//assighned token and url to variables
const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export const GithubProvider = ({children}) => {

  //initial state object
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  }

  const [state, dispatch] = useReducer(GithubReducer, initialState)

    //function for searching for particular user using the use state hooks
    const SearchUsers = async (text) => {
        setLoading()

        const response = await fetch(`${GITHUB_URL}/search/users?q=${text}`, 
            {
                headers: {
                authorization: `token ${GITHUB_TOKEN}`
                }
            }
        )
        const {items} = await response.json();
        //error handler
        // if (items.message == "Bad credentials") {
        //     alert(items.message);
        // }else{
        //     setUsers(items)
        //     setLoading(false)
        // }
        dispatch({
          type: "GET_USERS",
          payload: items
        })
    }

    //function for searching for a single user using the use state hooks
    const getUser = async (login) => {
      setLoading()
      const response = await fetch(`${GITHUB_URL}/users/${login}`, 
          {
              headers: {
              authorization: `token ${GITHUB_TOKEN}`
              }
          }
      )
      if(response.status === 404) {
        window.location = '/notfound'
      }else {
        const data = await response.json();
        //error handler
        // if (data.message == "Bad credentials") {
        //     alert(data.message);
        // }else{
        //     setUsers(data)
        //     setLoading(false)
        // }
        dispatch({
          type: "GET_USER",
          payload: data
        })
      }
    }

    const getUserRepos = async (login) => {
      // setLoading()

      const response = await fetch(`${GITHUB_URL}/users/${login}/repos`,
        {
          headers: {
            Authorization: `token ${GITHUB_TOKEN}`
          },
        }
      )

      const data = await response.json()
      dispatch({
        type: 'GET_REPOS',
        payload: data,
      })
    }

    //claer user from state
    const clearUsers = () => {
      dispatch({
        type: 'CLEAR_USERS',
      })
    }

    //set loading using reducer
    const setLoading = () => {
      dispatch({
        type: "SET_LOADING",
      })
    }

    //basically telling the github context to return the provider
    return (
        <GithubContext.Provider value={{
          users: state.users,
          loading: state.loading,
          user: state.user,
          repos: state.repos,
          SearchUsers,
          clearUsers,
          getUser,
          getUserRepos,
        }}>
          {children}
        </GithubContext.Provider>
    );
}

export default GithubContext