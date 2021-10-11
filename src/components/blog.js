import React from 'react';

const Blog = ({ blog, setBlogArray, setBlog }) => {
  const likeHandler = b => {
    let elem = { ...b };
    elem.like += 1;

    setBlogArray(blog.concat(elem).filter(f => f!==b));

  }
    
    return (
        <div className="mt-3">
            {blog.map((b,i) => (
                <div className="bg-secondary rounded mb-3" key={i}>
                    <div className="toast-header">
                   <h3 className="mr-auto text-primary"> <strong> {b.author} </strong> </h3>
                    </div>
                    <div className="toast-body pt-0">
                    <h4> {b.title} </h4>  
                    <div className="pb-2">
                        {b.description}
                    </div>  
                    <span className="badge badge-pill badge-info" onClick={() => likeHandler(b)}><i className="fas fa-thumbs-up"></i>  {b.like}   </span>
                      
                    </div>
                </div>
            ))}
        </div>
    )
        
}

export default Blog