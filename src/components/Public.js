import {Link} from  "react-router-dom"
import WorkoutMainPage from "../features/workouts/WorkoutMainPage"
import WorkoutChartPage from "../features/workouts/WorkoutChartPage"
import WorkoutsChart from "../features/workouts/WorkoutsChart"
import WorkoutList from "../features/workouts/WorkoutsList"
const Public = () => {
    
    const content = (
        <section className="public">
            <header>
                <div>
                <h1>Workout App</h1>
                
                </div>
            </header>
            <main className="public__main">
                <div className = "main_content_container">
                <p> Workout Tracker Landing Page </p>
                <Link to = "/dash/workouts/1"> Click Here to go to a public template of a Workout Tracker </Link>
                <br/>
                <Link to = "/dash"> If you have a User ID, click here to go to your Workout Tracker</Link>
                <br/>
                <Link to="/dash/workouts/addworkout">Record Workout</Link>
                <WorkoutsChart/>
                </div>
                <div className = "main_content_container">
                    {/* <WorkoutMainPage></WorkoutMainPage> */}
                    <WorkoutList exerciseName={"Benchpress"}/>
                </div>
            </main>
            <footer>
                Maaz Khan
                {/* <Link to="/login"> Login</Link> */}
                {/* <Link to="/dash">go to dashboard</Link> */}
            </footer>
        </section>
    ) 
    return content
}
export default Public
