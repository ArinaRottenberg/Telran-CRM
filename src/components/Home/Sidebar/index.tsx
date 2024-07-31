import React from 'react'



const Sidebar = () => {
  return (
    <aside className="sidebar">
    <button className="create-btn">+ Create</button>
    <nav>
        <ul>
            <li>Active</li>
            <li>Contacts</li>
            <li>Groups</li>
            <li>Students</li>
            <li>Lecturers</li>
        </ul>
    </nav>
</aside>
  )
}

export default Sidebar