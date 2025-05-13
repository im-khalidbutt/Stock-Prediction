import React from 'react'
import Button from './button'

const Main = () => {
  return (
    <>
     <div className='container pt-3 pb-5'>
      <div className="text-center bg-light-dark rounded pb-4">
        <h1 className='text-light'>Stock Prediction</h1>
        <p className='text-light'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        <Button text="Login" class="btn-outline-info" />
      </div>
     </div>
    </>
  )
}

export default Main
