import { useState } from 'react';
import { testimonialsData } from '../../data/testimonialsData';
import './Testimonial.css';
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png';
import { motion } from 'framer-motion';
const Testimonial = () => {
    const transition = { type: "spring", duration: 3 }
    const [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length;
    return (
        <div className='testimonial'>
            <div className="leftT">
                <span>TESTIMONIALS</span>
                <span className='strokeText'>WHAT THEY</span>
                <span>SAY ABOUT US</span>
                <motion.p
                    key={selected}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ ...transition, duration: 2 }}
                >{testimonialsData[selected].review}</motion.p>
                <span><span>{testimonialsData[selected].name}</span> - {testimonialsData[selected].status}</span>
            </div>
            <div className="rightT">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ...transition, duration: 2 }}
                ></motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ...transition, duration: 2 }}
                ></motion.div>
                <motion.img
                    key={selected}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ ...transition, duration: 2 }}
                    src={testimonialsData[selected].image}
                />
                <div className="arrows">
                    <img src={leftArrow} onClick={() => { selected === 0 ? setSelected(tLength - 1) : setSelected((prev) => prev - 1) }} />
                    <img src={rightArrow} onClick={() => { selected === tLength - 1 ? setSelected(0) : setSelected((prev) => prev + 1) }} />
                </div>
            </div>
        </div>
    )
}

export default Testimonial;
