import React from 'react'
import { Link, Route } from 'react-router-dom'



const Sidebar = () => {
  return (
    <aside className="sidebar">
    <button className="create-btn">+ Create</button>
    <nav>
        <ul>
        <Link to="/active"><li>Active</li></Link>
        <Link to="/contacts"><li>Contacts</li></Link>
        <Link to="/groups"><li>Groups</li></Link>
        <Link to="/students"><li>Students</li></Link>
        <Link to="/lecturers"><li>Lecturers</li></Link>
        </ul>
    </nav>
</aside>
  )
}

export default Sidebar