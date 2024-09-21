import { useState, useContext} from 'react'
import GithubContext from '../../context/github/GithubContext'
import AlertContext from '../../context/alert/AlertContext'


function UserSearch () {
    //use state hook handling user input
    const [text, setText] = useState('')

    //destructure the context
    const { users, SearchUsers, clearUsers } = useContext(GithubContext)
    const { setAlert } = useContext(AlertContext)

    //arrow function to handle change
    const handleChange = (e) => setText(e.target.value)

    //function that is triggered when the form is submitted
    const handleSubmit = (e) => {
        e.preventDefault();

        if(text === ""){
            setAlert("Please enter a search word", "error")
        }else{
            SearchUsers(text)
            setText('')
        }
    }

    return(
        <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <div className="relative">
                            <input id='search' type="text" className="w-full pr-40 bg-gray-200 input input-lg text-black" 
                            placeholder="Search"
                            value={text}
                            onChange={handleChange}
                            >
                            </input>
                            <button type="submit" className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">
                                Go
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div>
                {users.length > 0 && (
                    <button onClick={clearUsers} className="btn btn-ghost btn-lg">
                        Clear
                    </button>
                )}
            </div>
        </div>
    )
}

export default UserSearch