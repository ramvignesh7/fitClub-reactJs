import './Join.css';

const Join = () => {
    return (
        <div className='join'>
            <div className="leftJ">
                <hr />
                <span><span className='strokeText'>READY TO </span>LEVEL UP</span>
                <span>YOUR BODY <span className='strokeText'>WITH US?</span></span>
            </div>
            <div className="rightJ">
                <div className='joinContainer'>
                    <input placeholder='Enter your email address' />
                    <button className='btn btnJoin'>Join now</button>
                </div>
            </div>
        </div>
    )
}

export default Join
