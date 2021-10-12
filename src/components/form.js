import React from "react";
import blogServices from '../services/blogs'

const Form = ({ blog, setBlog, bSet,bSetter }) => {
    const changeHandler = Event => {
        const nam = Event.target.name;
        const val = Event.target.value;
        setBlog({
            ...blog,
            [nam]: val
        })
    }
    
    const submitHandler = Event => {
        Event.preventDefault();
        if(blog.author!=='' && blog.title!=='' && blog.description!==''){
        console.log(blog);
         blogServices.create(blog).then(newObj => {
           console.log(newObj)
           bSetter(bSet.concat(blog));
            setBlog({
              author: '',
              title: '',
              description: '',
              like: 0
            });
          })  
        }
        else{
            console.log('missing content')
        }
    }
    return (
        <form onSubmit={submitHandler} >
        <div className="form-row">
          <div className="col">
            <label htmlFor="blogger" className="mr-sm-2">Name:</label>
            <input type="text" value={blog.author} onChange={changeHandler} className="form-control" id="blogger" placeholder="Enter your name" name="author" />
          </div>
          <div className="col">
            <label htmlFor="title" className="mr-sm-2">Title:</label>
            <input type="text" value={blog.title} onChange={changeHandler} className="form-control" placeholder="Enter title" id="title" name="title" />
          </div>
        </div>
          <label htmlFor="comment" className="mb-2 mr-sm-2">Description:</label>
          <textarea onChange={changeHandler} value={blog.description} className="form-control mb-2 mr-sm-2" rows="5" id="comment" name="description"></textarea>
          <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
}

export default Form