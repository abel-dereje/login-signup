import logo from './logo.svg';
import './App.css';
import LoginSignup from './Components/LoginSignup/LoginSignup';

//import user_icon from '../Assets/person.png';
import email_icon from './Components/Assets/email.png';
import password_icon from './Components/Assets/password.png';

function App() {
  return (
    <div className='container'>
    <div className='header'>
    <div className='text'> Login </div>
    <div className='underline'></div>
    </div>
    <div className='inputs'>
    <div className='input'>
    <img src={email_icon} alt='' />
    <input type='email' />
    </div>
    <div className='input'>
    <img src={password_icon} alt='' />
    <input type='password' />
    </div>
    </div>
    </div>
  );
}

export default App;
