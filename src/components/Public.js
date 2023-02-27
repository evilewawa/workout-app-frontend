import {Link} from  "react-router-dom"

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Workout App</h1>
            </header>
            <main className="public__main">
                <p>
                    Workout Stuff
                </p>
            </main>
            <footer>
                <Link to="/login"> foot Login</Link>
                <Link to="/dash">go to dashboard</Link>
            </footer>
        </section>
    ) 
    return content
}
export default Public
