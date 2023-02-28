import { useState } from "react"
import { Link } from "react-router-dom"
const WorkoutLoginPage = () =>{
    const [userID, setUserID] = useState(1)

    const onChangeUserID = e => {
        setUserID(parseInt(e.target.value))
    }

    return (
        <div>
        <input type="number" onChange={onChangeUserID} value = {userID} placeholder = {"User ID"}/>
        <Link to={`${userID}`} >Go to list</Link>
        </div>
    )
}
export default WorkoutLoginPage