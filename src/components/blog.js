import React from 'react';
import blogServices from '../services/blogs';

const Blog = ({ blog, setBlogArray }) => {
  const likeHandler = id => {
    const b = blog.filter(b => b.id === id);
    let elem;
    for(const x of b.values()){
        elem = x
    }
    elem.like += 1;

    blogServices.update(id, elem)
    .then(updatedItem => {
        setBlogArray(
            blog.filter(bf => bf.id!==id ? bf : updatedItem)
            )
    })    
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
                    <span className="badge badge-pill badge-info" onClick={() => likeHandler(b.id)}><i className="fas fa-thumbs-up"></i>  {b.like}   </span>
                      
                    </div>
                </div>
            ))}
        </div>
    )
        
}

export default Blog