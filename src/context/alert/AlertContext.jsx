import { createContext, useReducer } from 'react'
import alertReducer from "../alert/AlertReducer"

const  AlertContext = createContext()

export const AlertProvider = ({children}) => {
    const initialState = null

    //using reducer
    const [state, dispatch] = useReducer(alertReducer, initialState)

    //set an alert
    const setAlert = (msg, type) => {
        dispatch({
            type: 'SET_ALERT',
            payload: {msg, type}
        })

        setTimeout(() => {
            dispatch({
                type: 'REMOVE_ALERT',
            })
        }, 3000);
    }

    return( 
        <AlertContext.Provider 
        value={{
            alert: state,
            setAlert
        }}>
            {children}
        </AlertContext.Provider>
    )
}

export default AlertContext