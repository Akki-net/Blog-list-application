import React,{useState} from 'react';
import blogServices from '../services/blogs';

const Blog = ({ blog, setBlogArray }) => {
    const [like, setLike] = useState(new Boolean(false));

  const likeHandler = id => {
    const b = blog.filter(b => b.id === id);
    let elem;
    for(const x of b.values()){
        elem = x
    }

    if(like){
        elem.like += 1;
        setLike(!like)
    }
    else{
        elem.like -= 1;
        setLike(!like)
    }

    blogServices.update(id, elem)
    .then(updatedItem => {
        setBlogArray(
            blog.filter(bf => bf.id!==id ? bf : updatedItem)
            )
    })
    .catch(error => console.log(error.response.data))
  }

  const closeHandler = id => { 
    const result = window.confirm('Are you sure you want to remove it?');
   
    if(result === true){
    blogServices.del(id)
    .then(response => {
        setBlogArray(blog.filter(b => b.id!==id));
    })
    .catch(error => console.log(error.response.data))
    }
  }
    
    return (
        <div className="mt-3">
            {blog.map((b,i) => (
                <div className="bg-secondary rounded mb-3" key={i}>
                    <div className="toast-header">
                   <h3 className="mr-auto text-primary"> <strong> {b.author} </strong> </h3>
                   <button className='close' onClick={() => closeHandler(b.id)}>&times;</button>
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