import React, { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import { Link, useNavigate } from 'react-router-dom';
const Header = () => {
    const navigate=useNavigate()
    const loggedData=useContext(UserContext);
    function logout(){
        localStorage.removeItem("nutrify-user")
        loggedData.setLoggedUser(null);
        navigate('/login')
    }
  return (
    <div className='header'>
      <ul>
        
        <Link to='/diet'> <li>Diet</li></Link>
        <Link to='/track'><li>Search</li></Link>
        <Link to='/add'><li>Add</li></Link>
      </ul>
      <button onClick={logout} className='button'>Logout</button>
    </div>
  )
}

export default Header
