import React from 'react'
import loginImage from '../assets/Images/login.png'
import backgroundImage from '../assets/Images/background.png'
import schoolImage from '../assets/Images/school.png'
import messengerImage from '../assets/Images/messenger.png'
import './login.css'

const Login = () => {
    return(
        <>
        <div 
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                width: '100vw',
                backgroundImage: `url(${backgroundImage})`
            }}
            >
            <div className='mainContainer'
                style={{
                    display:'flex',
                    flexDirection:'row',
                    alignContent: 'flex-start',
                    width:'75%'
                }}
            >
                <div className='imageContainer' style={{
                    height: '75vh',
                    width: '40vw',
                    backgroundImage: `url(${loginImage})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    // backgroundColor:'#B7D8F0'
                }}></div>
                <div className='loginContainer' style={{
                    height: '75vh',
                    width: '40vw',
                    display: 'flex',
                    flexDirection:'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <div style={{
                    height: '200px',
                    width: '200px',
                    backgroundImage: `url(${schoolImage})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    // backgroundColor:'#B7D8F0'
                    }}></div>
                    <br/>
                    <h1>Login Account</h1>
                    <br/>
                    <input className='inputStyle' id="email-address" name="email" placeholder="Username" required></input>
                    <input className='inputStyle' id="password" name="password" type="password" placeholder="Password" required></input>
                    <br/>
                    <button className='button-52' type="submit">Login</button>
                    <br/><br/><br/>
                    <div style={{
                        width:'20vw',
                        display: 'flex',
                        flexDirection:'row',
                        justifyContent: 'space-between',
                    }}>
                        <a href="/teacher" className='button-6' type="submit">Teacher Portal</a>
                        <a href='/student' className='button-6' type="submit">Student Portal</a>
                    </div>
                    <br/><br/><br/>
                    <h4>OLSIS 3.0.0</h4>
                </div>
            </div>
            <a href="#" className="float" style={{
                    backgroundImage: `url(${messengerImage})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                }}>
                    <span class="tooltip">Chat Me!</span>
            </a>
        </div>
        </>
    )
    
}


export default Login