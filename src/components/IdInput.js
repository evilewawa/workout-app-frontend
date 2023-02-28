import {button,useState,input } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
const IdInput = () =>{
    const [inp, setInp] = useState("")
    const [passwordInp, setPasswordInp] = useState("")
    const [loginDisabled, setLoginDisabled] = useState(false)
    const navigate = useNavigate()

    const changeLoginDisabled = (val) =>{
        setLoginDisabled(val)
    }

    const changeInp = (val) =>{
        setInp(val.target.value)
        if (isNumeric(inp) && passwordInp === "waliad"){
            changeLoginDisabled(true)
        }
    }
    const changePasswordInp = (val) =>{
        setPasswordInp(val.target.value)
        if (isNumeric(inp) && passwordInp === "waliad"){
            changeLoginDisabled(true)
        }
    }
    function isNumeric(x){
        // gud enuf for now
        return !isNaN(x)
    }
    const handleClick= () =>{
        console.log("walid")
        // navigate()
        navigate.apply(`${parseInt(inp)}`)
    }
    return (
        <div>
        <input type = "number" value = {inp} onChange ={changeInp} placeholder = "Put in ID"/>
        <input type = "text" value = {passwordInp} onChange = {changePasswordInp} placeholder = "Put in Password"/>
        <button disabled = {!loginDisabled} onClick = {handleClick}>walid</button>
        </div>
    )
}

export default IdInput