import React, { useState, useEffect, useRef } from 'react'
import Form from './form'
import Blog from './blog'
import blogServices from '../services/blogs'
import Toggleable from './Toggleable'

const Content = ({ user, setUser }) => {
  const [ blogArray, setBlogArray ] = useState([])

  const blogFormRef = useRef()

  useEffect(() => {
    blogServices.getAll()
      .then(returnedList => setBlogArray(returnedList))
  }, [])

  const addBlog = (blogObject) => {
    blogFormRef.current.toggleVisibility()
    blogServices
      .create(blogObject)
      .then(newObj => {
        setBlogArray(blogArray.concat(newObj))
      })
      .catch(error => console.log(error.response.data))
  }

  return (
    <div className="tab-content mt-2">
      <div id="home" className="container tab-pane active">
        <Toggleable buttonLabel="Create new Blog" ref={blogFormRef} >
          <Form createBlog={addBlog} />
        </Toggleable>
        <Blog blog={blogArray} setBlogArray={setBlogArray} user={user} setUser={setUser} />
      </div>
      <div id="menu1" className="container tab-pane fade">
        <p>ShareIdea’s mission is to share and grow the world’s knowledge. Not all knowledge can be written down, but much of that which can be, still isn&prime;t. It remains in people’s heads or only accessible if you know the right people. We want to connect the people who have knowledge to the people who need it, to bring together people with different perspectives so they can understand each other better, and to empower everyone to share their knowledge for the benefit of the rest of the world.</p>
      </div>
      <div id="menu2" className="container tab-pane fade">
        <p>email: akashsharma.zak@gmail.com </p>
        <p>contact: 9625703834</p>
      </div>
    </div>
  )
}

export default Content