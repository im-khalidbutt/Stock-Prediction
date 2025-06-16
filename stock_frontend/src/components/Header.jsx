import React, {useContext} from 'react'
import Button from './button'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthProvider'


const Header = () => {
  const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)
  const  navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    setIsLoggedIn(false)
    navigate('/login')
  }
  return (
    <>
      <nav className="navbar bg-body-tertiary ">
      <div className="container ">
        <Link className="navbar-brand" to={'/'} >Stock</Link>
        <div> {isLoggedIn ? (<button className='btn btn-danger' onClick={handleLogout}>Logout</button>) : (
            <>
            <Button text="Login" class="btn-outline-primary"  url='/login'/>
              &nbsp; 
            <Button text="Sign In" class="btn-outline-success" url='/register'/>
            </>
        ) }
        </div>
      </div>
    </nav>
    </>
  )
}

export default Header
