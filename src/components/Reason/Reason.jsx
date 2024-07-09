import './Reason.css';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';
import tick from '../../assets/tick.png';
import nike from '../../assets/nike.png';
import adidas from '../../assets/adidas.png';
import nb from '../../assets/nb.png';

const Reason = () => {
    return (
        <div className='reason'>
            <div className="leftR">
                <img src={image1} />
                <img src={image2} />
                <img src={image3} />
                <img src={image4} />
            </div>
            <div className="rightR">
                <span className='reasonText'>some reasons</span>
                <div>
                    <span className='strokeText'>why </span>
                    <span>choose us?</span>
                </div>
                <ul>
                    <li>
                        <img src={tick} />
                        <p>OVER 140+ EXPERT COACHS</p>
                    </li>
                    <li>
                        <img src={tick} />
                        <p>TRAIN SMARTER AND FASTER THAN BEFORE</p>
                    </li>
                    <li>
                        <img src={tick} />
                        <p>1 FREE PROGRAM FOR NEW MEMBER</p>
                    </li>
                    <li>
                        <img src={tick} />
                        <p>RELIABLE PARTNERS</p>
                    </li>
                </ul>
                <div className='partners'>
                    <p>our partners</p>
                    <div className='partnersImage'>
                        <img src={nb}/>
                        <img src={adidas}/>
                        <img src={nike}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reason;
