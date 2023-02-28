import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

import {useSelector} from "react-redux";
import { selectWorkoutsById } from "./workoutsApiSlice";

const Workout = ({workoutId, userID, exercise_name}) => {
    const workout = useSelector(state => selectWorkoutsById(state, workoutId))
    const navigate = useNavigate()
    // temporary filter for userID
    if (workout && (userID === "all" || parseInt(userID) === workout.userID) 
    && (workout.exercise_name === exercise_name || exercise_name === "All")){
        const handleEdit = () => navigate("/dash/workouts/${workoutId}")
        const workoutSetsString = workout.sets.toString().replaceAll(",", ",")
        const workoutDate = new Date(workout.createdAt.toString())
        const workoutDateString = workoutDate.toDateString()

        const workoutWeightString = workout.weight.toString()
        const workoutUserIDString = workout.userID.toString()

        // could be a cellStatus attribute here
        return (
            <tr className="table__row user">
                <td className = {`table__cell`}>{workout.exercise_name}</td>
                <td className = {`table__cell`}>{workoutWeightString}</td>
                <td className = {`table__cell`}>{workoutSetsString}</td>
                <td className = {`table__cell`}>{workoutDateString}</td>
                <td className = {`table__cell`}>{workoutUserIDString}</td>
                {/* <td className = {`table__cell`}>
                    <button className = "icon-button table__button"
                    onClick = {handleEdit}>
                        <FontAwesomeIcon icon = {faPenToSquare}/>
                    </button>
                </td> */}
            </tr>
        )

    }else return null
}

export default Workout
