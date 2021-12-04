import birdblog from "../images/birdblog.png"
import dayplanner from "../images/dayplanner.png"
import dinnermovie from "../images/dinnermovie.png"
import weatherdashboard from "../images/weatherdashboard.png"
import budget from "../images/budgettracker.png"
import workout from "../images/workout.png"

function Projects() {
    return (
        <div>
            <div className="work2 col l3"><h3>Portfolio</h3></div>
            <main className="col s12 m8 l9" id="work">
                <div className="grid-container">
                    <div className="item1">
                        <a href="https://deannaboiani.github.io/dinner-and-a-movie/" target="_blank">
                            <img className="big_image" src={dinnermovie} alt /></a>
                        <div className="bottom-left">
                            <b>Dinner and A Movie</b>
                            <p>
                                My first web application where you can randomly select a dinner
                                and a movie for your date night!
                            </p>
                        </div>
                    </div>
                    <div className="item6">
                        <a href="https://abirdseyeview.herokuapp.com/" target="_blank">
                            <img className="big_image" src={birdblog} alt /></a>
                        <div className="bottom-left">
                            <b>A Bird's Eye View</b>
                            <p>
                                A full stack application allowing users to post and share their bird sighting with fellow bird lovers. Users will need to create a login in order to post and see other people's post.
                            </p>
                        </div>
                    </div>
                    <div className="item2">
                        <a href="https://mple06.github.io/fivedayforecastML/" target="_blank">
                            <img className="small_image" src={weatherdashboard} alt /></a>
                        <div className="bottom-left">
                            <b>Weather Dashboard</b>
                            <p>Check the weather in different cities!</p>
                        </div>
                    </div>
                    <div className="item3">
                        <a href="https://mple06.github.io/dayplanner/" target="_blank">
                            <img className="small_image" src={dayplanner} alt /></a>
                        <div className="bottom-left">
                            <b>Dayplanner</b>
                            <p>Plan out your schedule!</p>
                        </div>
                    </div>
                    <div className="item4">
                        <a href="https://trackmymonies.herokuapp.com//" target="_blank">
                            <img className="small_image" src={budget} alt /></a>
                        <div className="bottom-left">
                            <b>Budget Tracker</b>
                            <p>A budget tracker application that works online and offline so you can easily track your spending. Great for when travelling and you might not have service!</p>
                        </div>
                    </div>
                    <div className="item5">
                        <a href="https://workworkout.herokuapp.com/?id=6196dfb8370ad00016902fe7" target="_blank">
                            <img className="small_image" src={workout} alt /> </a>
                        <div className="bottom-left">
                            <b>Workout Tracker</b>
                            <p>A multi-purpose workout tracker that allow users to select between resistance or cardio. Also, includes a graph of the last seven days. </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Projects;