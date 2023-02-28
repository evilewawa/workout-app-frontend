import {Link} from "react-router-dom"

const DashHeader = () =>{
    const content = (
        <header className = "dash-header">
            <div className = "dash-header__container">
                <Link to="/">
                    <h1 className = "dash-headdr__title">Workouts</h1>
                </Link>
                <nav className = "dash-header__nav">
                    {/* add other buttons later*/}
                </nav>
            </div>
        </header>
    )
    return content
}
export default DashHeader