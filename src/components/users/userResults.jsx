import {useContext, useEffect } from "react"
import Spinner from "../layout/spinner"
import UserItem from "../users/UserItem"
import GithubContext from "../../context/github/GithubContext"

function userResults() {
    //pulls out users, loading and fetchUsers fron the context
    const {users, loading} = useContext(GithubContext);


    //condition to check for when request is done.
    if(!loading) {
        return(
            <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
                {
                    users.map((user) => (
                       <UserItem key={user.id} user={user} />
                    ))
                }         
            </div>
        ) 
    } else {
        return <Spinner/>
    }
    
}
export default userResults