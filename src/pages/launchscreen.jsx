import React from 'react';
import './launch.css';
import { Link, useNavigate } from 'react-router-dom';

function Luanchscreen() {

  const History = useNavigate()
  const logout = () => {
    History('/')
  }


  return (
    <div className='launch-page'>

      <button onClick={logout} className='logout'>Log Out</button>
    <center><h1 style={{color:'white'}}>Home</h1></center>
    <div>
      <div className='brand'>
      <div className='logo'></div>
      <h1 style={{color:'white'}}>Vayusense</h1>
      </div>
    </div>
    <div className='flag'>
<h1>Indian Flag</h1>

    </div>
    <div className='nav'>
  <div>Equipments</div>
  <div>Map Updates</div>
  <div>Phone Book</div>
  <div>Map Register</div>
</div>

      <div className="bottom-navbar">
        <Link to="/launch">Home</Link>
        <Link to="/sewer">Sewer</Link>
        <Link to="/workspace">Workspace</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </div>
  );
}

export default Luanchscreen;
