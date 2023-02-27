import Layout from "./components/Layouts";
import {Routes, Route} from "react-router-dom"
import Public from "./components/Public"
import Login from "./features/auth/Login"
import DashLayout from "./components/DashLayout";
import Welcome from "./features/auth/Welcome";
import WorkoutList from "./features/workouts/WorkoutsList";





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
            <Route index element = {<WorkoutList/>}/>
            <Route path = ":userID" element = {<WorkoutList/>}>
              {/* <Route path = "graph" element = {} */}
            </Route>

          </Route> 
        </Route>{/*end dash */}
      </Route>
    </Routes>
  );

}



export default App;
