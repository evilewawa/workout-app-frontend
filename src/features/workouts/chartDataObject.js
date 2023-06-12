import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

import {useSelector} from "react-redux";
import { selectWorkoutsById } from "./workoutsApiSlice";

const chartDataObject = ({workouts}) => {
    const {ids} = workouts
        // content = ids
    //const tableContent = ids.map(workoutId => 
    // let tableContent = []
    // for (let i = 0; i < ids.length; i ++) {
    //     const workout = useSelector(state => selectWorkoutsById(state, workoutId))
    //     const navigate = useNavigate()
    //     if (workout)// && (userID === "all" || parseInt(userID) === workout.userID) 
    //     //&& (workout.exercise_name === exercise_name || exercise_name === "All"))
    //     {
    //     const handleEdit = () => navigate("/dash/workouts/${workoutId}")
    //     const workoutSetsString = workout.sets.toString().replaceAll(",", ",")
    //     const workoutDate = new Date(workout.createdAt.toString())
    //     const workoutDateString = workoutDate.toDateString()

    //     const workoutWeightString = workout.weight.toString()
    //     const workoutUserIDString = workout.userID.toString()
    //     const sum = (arr) => {
    //         let total = 0
    //             for (let i = 0; i < arr.length; i++){
    //                 total += arr[i]
    //             }
    //             return total
    //         }
    //         let point = {Weight: parseInt(workoutWeightString), reps : workout.sets, total: sum(workout.sets), date: workoutDate}
    //         tableContent.push(point)
    //     }
    // }

    
    return (
        <div></div>
    )
}

export default chartDataObject
