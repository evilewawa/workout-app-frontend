import { useGetWorkoutsQuery,useGetExerciseNamesQuery } from "./workoutsApiSlice"
import { useParams,useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Workout from "./Workout";
const WorkoutList = ({exerciseName}) =>{
    // console.log(useParams())
    const {userID,exercise_name} = useParams()
    // console.log(userID, exercise_name)
    const {
        data:workouts,
        //states
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetWorkoutsQuery()

    // console.log(exerciseName)
    let content;
    if (isLoading) content = <p>Loading</p>
    if (isError){
        content = <p className ="errmsg">{error?.data?.message}</p>
    }
    if (isSuccess && userID){
        const {ids} = workouts

        const tableContent = ids?.length
            ? ids.map(workoutId => <Workout key = {workoutId} workoutId= {workoutId}
                 userID = {userID? userID : 1} 
                exercise_name = {exerciseName? exerciseName : "all"} />)
            : null
        content = (
            <table className = "table table--users">
                <thead className= "table__thead">
                    <tr>
                        <th scope = "col" className = "table__th user__username">Exercise Name</th>
                        <th scope = "col" className = "table__th user__roles">Weight</th>
                        <th scope = "col" className = "table__th user__roles">Sets</th>
                        <th scope = "col" className = "table__th user__roles">Date</th>
                        <th scope = "col" className = "table__th user__roles">User ID</th>
                        {/* <th scope = "col" className = "table__th user_edit">Edit</th> */}
                    </tr>
                </thead>
                <tbody>
                    {tableContent}
                </tbody>
            </table>
            
        )
    }
    

    return (
        
        content
    )
}
export default WorkoutList