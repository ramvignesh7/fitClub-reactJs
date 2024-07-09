import Header from '../Header/Header';
import './Hero.css';
import heart from '../../assets/heart.png';
import heroImage from '../../assets/hero_image.png';
import heroImageBack from '../../assets/hero_image_back.png';
import calories from '../../assets/calories.png';
import { motion } from 'framer-motion';
const Hero = () => {
   const transition = {type:"spring",duration: 3}     
    return (
        <div className='hero'>
            
            <div className="blur heroBlur"></div>
            <div className="leftH">
                <Header />
                {/* best fitness */}
                <div className='bestFitness'>
                    <motion.div
                        initial={{left: '238px'}}
                        whileInView={{left:"10px"}}
                        transition={{...transition,type:'tween'}}
                    ></motion.div>
                    <span>THE BEST FITNESS CLUB IN THE TOWN</span>
                </div>
                {/*hero title text */}
                <div className='heroText'>
                    <div>
                        <span className='strokeText'>SHAPE </span>
                        <span>YOUR</span>
                    </div>
                    <div>
                        <span>IDEAL BODY</span>
                    </div>
                    <div>
                        <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
                    </div>
                </div>
                {/* figures */}
                <div className="figure">
                    <div>
                        <span>+140</span>
                        <span>EXPERT COACHES</span>
                    </div>
                    <div>
                        <span>+978</span>
                        <span>MEMBERS JOINED</span>
                    </div>
                    <div>
                        <span>+50</span>
                        <span>FITNESS PROGRAMS</span>
                    </div>
                </div>
                {/* hero buttons */}
                <div className="heroButtons">
                    <button className="btn">Get Started</button>
                    <button className="btn">Learn More</button>
                </div>
            </div>
            <div className="rightH">
                <button className="btn">Join Now</button>
                {/* heart rates */}
                <motion.div 
                    whileInView={{right: "4rem"}}
                    initial={{right:"0"}}
                    transition={transition}
                    className="heartRate">
                    <img src={heart}/>
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </motion.div>
                {/* hero image */}
                <img src={heroImage} className='heroImage'/>
                <motion.img 
                    initial={{right:"14rem"}}
                    whileInView={{right:"21rem"}}
                    transition={transition}
                    src={heroImageBack} className='heroImageBack'
                />
                {/* calories */}
                <motion.div 
                    initial={{right:"37rem"}}
                    whileInView={{right:"28rem"}}
                    transition={transition}
                    className="calories">
                    <img src={calories}/>
                    <div>
                        <span>Calories burned</span>
                        <span>220 kcal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero
