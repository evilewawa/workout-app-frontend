import {Link} from  "react-router-dom"

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <div>
                <h1>Workout App</h1>
                
                </div>
            </header>
            <main className="public__main">
                <p> Workout Tracker Landing Page </p>
                <Link to = "/dash/workouts/1"> Click Here to go to a public template of a Workout Tracker </Link>
                <br/>
                <Link to = "/dash"> If you have a User ID, click here to go to your Workout Tracker</Link>
                <br/>
                <Link to="/dash/workouts/addworkout">Record Workout</Link>
            </main>
            <footer>
<<<<<<< HEAD
                Maaz Khan
                {/* <Link to="/login"> Login</Link> */}
                {/* <Link to="/dash">go to dashboard</Link> */}
=======
                <Link to="/login"> foot Login</Link>
                <Link to="/dash">go to dashboard</Link>
>>>>>>> c13b1c2e190c850066cda194292a303e91ea2700
            </footer>
        </section>
    ) 
    return content
}
export default Public
