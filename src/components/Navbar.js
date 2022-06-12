import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div style={{display:"flex",gap:"20px", textAlign:"center",margin:"auto"}}>
       <Link to="/stopwatch" >Stopwatch</Link>
       <Link to="/timer">Timer</Link>
    </div>
  )
}

export default Navbar