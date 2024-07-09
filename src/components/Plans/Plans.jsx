import { plansData } from '../../data/plansDate';
import './Plans.css';
import tick from '../../assets/whiteTick.png';
import rightArrow from '../../assets/rightArrow.png';
const Plans = () => {
  return (
    <div className='plansContainer'>
        <div className="blur blurL"></div>
        <div className="blur blurR"></div>
        <div className="programHeader programHeaderFoot">
            <span className='strokeText'>READY TO START</span>
            <span>YOUR JOURNEY</span>
            <span className='strokeText'>NOW WITHUS</span>
        </div>
        {/* plans card */}
        <div className='plans'>
            {plansData.map((data)=> (
                <div className="plan">
                    {data.image}
                    <span>{data.planName}</span>
                    <span>{data.price}</span>
                    <div className="features">
                        {data.features.map((feature,index)=>(
                            <div  className="feature">
                                <img src={tick} />
                                <span key={index}>{feature}</span>
                            </div>
                        ))}
                    </div>
                    <div className='benefits'>
                        <span>See more benefits <img src={rightArrow}/></span>
                    </div>
                    <button className="btn">Join Now</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Plans;
