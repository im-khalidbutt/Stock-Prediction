import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className="footer bg-light text-white text-center py-3">
      <div className="container  text-dark ">
        <p className="mb-1 text-dark">&copy; 2025 Stock inc.</p>
        <ul className="list-inline mb-0">
          <li className="list-inline-item"><a href="#" className=" text-dark text-decoration-none ">Privacy</a></li>
          <li className="list-inline-item"><a href="#" className=" text-dark text-decoration-none">Terms</a></li>
          <li className="list-inline-item"><a href="#" className=" text-dark text-decoration-none">Contact</a></li>
        </ul>
      </div>
    </footer>
    </>
  )
}

export default Footer
