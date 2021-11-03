import React,{useState, useEffect} from 'react';
import blogServices from '../services/blogs';
import loginServices from '../services/login';

const Blog = ({ blog, setBlogArray, user, setUser }) => {
    const [likeArray, setLikeArray] = useState([]);

  const likeHandler = async id => {
    const myLikes = await loginServices.getLike(user.id);
  
    setLikeArray(likeArray.splice(0, likeArray.length, ...myLikes))
    
    const elem = blog.find(b => b.id === id);
    const i = blog.findIndex(b => b.id === id);
    
    const newlikeArr = likeArray.map((l,j) =>  i === j ? !l : l)
    setLikeArray(newlikeArr);

    if(!likeArray[i]){
        elem.like += 1;
    }
    else{
        elem.like -= 1;
    }
    
    blogServices.update(id, elem)
    .then(updatedItem => {
        setBlogArray(
            blog.filter(bf => bf.id!==id ? bf : updatedItem)
            )
    })
    .catch(error => console.log(error.response.data))
    
    const likes = [...newlikeArr];
    const myUser = {
        ...user,
        likes
    };
  
    const finalUser = await loginServices.goLike(user.id, myUser);
    setUser(finalUser)
  }

  const closeHandler = id => { 
    const result = window.confirm('Are you sure you want to remove it?');
   
    if(result === true){
    blogServices.del(id)
    .then(response => {
        setBlogArray(blog.filter(b => b.id!==id));
    })
    .catch(error => {
        console.log(error.response.data)
        alert('error: attempted by a wrong user')
    })
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