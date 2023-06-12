import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import chartDataObject from "./chartDataObject";
import {useSelector} from "react-redux";
import { selectWorkoutsById } from "./workoutsApiSlice";
import { useGetWorkoutsByUserIDAndNameQuery } from "./workoutsApiSlice";

const WorkoutChartData = (exercise_name, userID) => {
    // const {
    //     data:workouts,
    //     //states
    //     isLoading,
    //     isSuccess,
    //     isError,
    //     error
    // } = useGetWorkoutsByUserIDAndNameQuery(userID, exercise_name)
    // if (isLoading)
    // if (isSuccess){

    // }
    // const workout = useSelector(state => selectWorkoutsById(state, workoutId))
    // const navigate = useNavigate()
    // // temporary filter for userID
    // if (workout && (userID === "all" || parseInt(userID) === workout.userID) 
    // && (workout.exercise_name === exercise_name || exercise_name === "All"))
    // {
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
        
    //         // could be a cellStatus attribute here
    //         return (
    //             // <chartDataObject Weight = {point.Weight} Reps = {point.reps} Total = {point.total} Date = {point.date} />
    //             point
    //             // <div></div>
    //         )
            

    //     }else return null
    }


export default WorkoutChartData
