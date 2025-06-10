import React, {useState} from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const Register = () => {
  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleRegisteration = async (e) => {
    e.preventDefault();
    setLoading(true)
    const userData = {
      username, email, password
    }

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/v1/register/', userData)
      setErrors({})
      setSuccess(true)
      console.log('response.data', response.data)
    } catch(error) {
      setErrors(error.response.data)

      console.log('error.data', error.response.data)

    }finally{
      setLoading(false)
    }

  }
  return (
    <>
    <br/>
      <div className='container'>
        <div className="row justify-content-center">
          <div className="col-md-6 bg-light-dark p-5 rounded">
            <h3 className='text-light text-center mb-4'>Create an Account</h3>
            <form onSubmit={handleRegisteration}>
              <div className="mb-3">
                <input type="text" className='form-control ' placeholder='Username' value={username}  onChange={(e)=>setUserName(e.target.value)}/>
                <small>{errors.username && <div className='text-danger'>{errors.username}</div>}</small>
              </div> 
              <div className="mb-3">
                <input type="email" className='form-control' placeholder='Email Address' value={email}  onChange={(e)=>setEmail(e.target.value)}/>
                <small>{errors.email && <div className='text-danger'>{errors.email}</div>}</small>
              </div> 
              <div className="mb-3  ">
                <input type="password" className='form-control' placeholder='Set Password' value={password}  onChange={(e)=>setPassword(e.target.value)}/>
                <small>{errors.password && <div className='text-danger'>{errors.password}</div>}</small>
              </div> 
              {success && <div className='alert alert-success'>
                Registeration Successful
                </div>}
                {loading ? (
                  <button type='submit' className='btn btn-info d-block mx-auto' disabled><FontAwesomeIcon icon={faSpinner} spin/> Please Wait...</button>
                ): (
                  <button type='submit' className='btn btn-info d-block mx-auto'>Register</button>
                )}
              {/* <button type='submit' className='btn btn-info d-block mx-auto'>Register</button> */}
            </form>

          </div>
        </div>
      </div>
    </>
  )
}

export default Register
