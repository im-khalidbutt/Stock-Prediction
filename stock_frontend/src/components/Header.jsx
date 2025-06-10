import React from 'react'
import Button from './button'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
      <nav className="navbar bg-body-tertiary ">
      <div className="container ">
        <Link className="navbar-brand" to={'/'} >Stock</Link>
        <div>
        <Button text="Login" class="btn-outline-primary"  url='/login'/>
        &nbsp; 
        <Button text="Sign In" class="btn-outline-success" url='/register'/>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Header
