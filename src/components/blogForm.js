import React from 'react'
import Nav from './nav'
import Content from './tabpane'

const BlogForm = ({ user, setUser }) => {
  return (
    <div>
      <Nav user={user} setUser={setUser} />
      <Content user={user} setUser={setUser} />
    </div>
  )
}

export default BlogForm