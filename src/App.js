import Layout from "./components/Layouts";
import {Routes, Route, Link} from "react-router-dom"
import Public from "./components/Public"
import Login from "./features/auth/Login"
import DashLayout from "./components/DashLayout";
import Welcome from "./features/auth/Welcome";
import WorkoutList from "./features/workouts/WorkoutsList";
import WorkoutMainPage from "./features/workouts/WorkoutMainPage";
import AddWorkout from "./components/AddWorkout"
import IdInput from "./components/IdInput";
import WorkoutLoginPage from "./features/workouts/WorkoutLoginPage";

function App(){
  return (
    <Routes>

      <Route path = "/" element = {<Layout/>}>

        <Route index element={<Public/>}/>
        <Route path = "login" element={<Login/>}/>
        <Route path = "dash" element = {<DashLayout/>}>
          {/* index means default path */}
          <Route index element = {<Welcome/>}/>

          <Route path = "workouts">
            <Route index element = {<WorkoutLoginPage/>}/>
            <Route path = ":userID" element = {<WorkoutMainPage/>}>
              {/* <Route path = "graph" element = {} */}
              <Route path = ":exercise_name" element = {<WorkoutMainPage/>}/>
            </Route>
            <Route path = "addWorkout" element = {<AddWorkout/>}>
              {/* <Route index path = ":userID" element = /> */}
            </Route>
          </Route> 
        </Route>{/*end dash */}
      </Route>
    </Routes>
  );

}



export default App;
