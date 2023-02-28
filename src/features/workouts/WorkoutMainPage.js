import Workout from "./Workout";
import WorkoutList from "./WorkoutsList";
import { useGetExerciseNamesQuery } from "./workoutsApiSlice";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const WorkoutMainPage = () =>{
    const [exerciseNames, setExercisesNames] = useState(["All"])
    const [searchEName,setSearchE_Name] = useState("All")
    const {
        data:workoutNames,
        //states
    } = useGetExerciseNamesQuery()
    useEffect(()=>{
        changeExerciseNames()
    },[workoutNames,searchEName])
    const changeExerciseNames = () =>{

        setExercisesNames(["All"].concat(workoutNames))
    }
    const onChangeSearchE_Name = e => {
        setSearchE_Name(e.target.value)
    }
    return(
        <div>
        <p>select exercise</p>
        <select onChange = {onChangeSearchE_Name}>
            {exerciseNames.map(exercise => {
                return (<option value = {exercise} >{exercise}</option>
            )})}
            
        </select>
        
         <WorkoutList exerciseName = {searchEName}/></div>
     )
}
export default WorkoutMainPage