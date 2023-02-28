import { useAddNewExerciseMutation } from "../features/workouts/workoutsApiSlice"
import {button} from "react"
import { useState } from "react"
const AddWorkout = () =>{
    const [addNewExercise, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useAddNewExerciseMutation()

    const [userIDInp, setUserIDInp] = useState(0)
    const [passwordInp, setPasswordInp] = useState("")
    const [setsInp, setSetsInp] = useState([0,0,0])
    const [weightInp, setWeightInp] = useState(0)
    const [enameInp, setEnameInp] = useState("")
    const [loginDisabled, setLoginDisabled] = useState(false)
    // const [data, setData] = useState({exercise_name: enameInp , weight: weightInp,
    //     sets: setsInp, userID : userIDInp})
    const workoutData = {exercise_name: enameInp , weight: weightInp,
        sets: setsInp, userID : userIDInp}
    const clickHandler = async () =>{
        // console.log(workoutData)
        // console.log({userIDInp, setsInp, weightInp, enameInp})
        let exercise_name = enameInp
        let weight = weightInp
        let sets  = setsInp
        let userID = userIDInp
        if (passwordInp === "walid"){
        await addNewExercise({exercise_name, weight, sets, userID})
        console.log("sucess in adding workout")
        }
        else{
            console.log("failure")
        }
    }
    const changeUserID = e =>{
        if (e.target.value !== ""){
        console.log(e.target.value)
        setUserIDInp(parseInt(e.target.value))
        workoutData.userID = userIDInp
        }
    }
    const changeWeight = e =>{
        if (e.target.value !== ""){
        setWeightInp(parseInt(e.target.value))
        workoutData.weight = weightInp
    }}
    const changeSet1 = e =>{
        if (e.target.value !== ""){
        let set = [parseInt(e.target.value), setsInp[1], setsInp[2]]
        setSetsInp(set)
        workoutData.sets = setsInp
    }}
    const changeSet2 = e =>{
        if (e.target.value !== ""){
        let set = [setsInp[0],parseInt(e.target.value),  setsInp[2]]
        setSetsInp(set)
        workoutData.sets = setsInp
    }}
    const changeSet3 = e =>{
        if (e.target.value !== ""){
        let set = [setsInp[0], setsInp[1], parseInt(e.target.value)]
        setSetsInp(set)
        workoutData.sets = setsInp
    }}
    const changeEName = e =>{
        setEnameInp(e.target.value)
        workoutData.exercise_name = enameInp
    }
    
    const changePassword = e =>{
        setPasswordInp(e.target.value)
        if (passwordInp === "walid"){
            changeLoginDisabled(true)
        }
        else{
            changeLoginDisabled(false)
        }
    }
    const changeLoginDisabled = (val) => {
        setLoginDisabled(val)
    }

    return (
        <div>
            <div>

        <input type = "number" value = {userIDInp} onChange ={changeUserID} placeholder = "Put in ID"/>
        User ID</div>
        <br/>
        <input type = "text" value = {enameInp} onChange = {changeEName} placeholder = "Put in exercise name"/>
        exercise name
        <br/>
        <input type = "number" value = {weightInp} onChange ={changeWeight} placeholder = "Put in Weight"/>
        weight
        <br/>
        <input type = "number" value = {setsInp[0]} onChange ={changeSet1} placeholder = "Put in first set"/>
        <input type = "number" value = {setsInp[1]} onChange ={changeSet2} placeholder = "Put in second set"/>
        <input type = "number" value = {setsInp[2]} onChange ={changeSet3} placeholder = "Put in third set"/>Sets
        <br/>
        <input type = "text" value = {passwordInp} onChange = {changePassword} placeholder = "Put in Password"/>Password
        <br/>
        <button onClick={clickHandler}>Add Workout</button>Will not add without proper password
        {/* <p hidden={}>Put in proper password</p> */}
        </div>
    )
}
export default AddWorkout