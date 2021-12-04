import './Resume.css'
import ResumeImage from '../images/Resume.png'

function Resume() {
    return (
        <div className="resume">
            <h3>Resume</h3>
            <div>
                <img src={ResumeImage} alt="resume" />
            </div>
        </div>
    )
}

export default Resume;