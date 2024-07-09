import './Programs.css';
import { programsData } from '../../data/programData';
import rightArrow from '../../assets/rightArrow.png'
const Programs = () => {
    return (
        <div className='programs'>
            <div className="programHeader">
                <span className='strokeText'>EXPLORE OUR</span>
                <span>PROGRAMS</span>
                <span className='strokeText'>TO SHAPE YOU</span>
            </div>
            <div className="programCategory">
                {programsData.map((data) => (
                    <div className='category'>
                        {data.image}
                        <span>{data.heading}</span>
                        <span>{data.details}</span>
                        <div className="joinNow">
                            <p>Join Now</p>
                            <img src={rightArrow}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Programs;
