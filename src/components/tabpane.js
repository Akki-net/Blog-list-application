import React, {useState} from 'react';
import Form from './form';
import Blog from './blog';

const Content = () => {
    const [ blogArray, setBlogArray ] = useState([]);
    const [ blog, setBlog ] = useState({
      author: '',
      title: '',
      description: '',
      like: 0
    });

    return (
        <div className="tab-content">
    <div id="home" className="container tab-pane active">
        <Form blog={blog} setBlog={setBlog} bSet={blogArray} bSetter={setBlogArray} />
        <Blog blog={blogArray} setBlogArray={setBlogArray} setBlog={setBlog} />
    </div>
    <div id="menu1" className="container tab-pane fade">
      <p>ShareIdea’s mission is to share and grow the world’s knowledge. Not all knowledge can be written down, but much of that which can be, still isn't. It remains in people’s heads or only accessible if you know the right people. We want to connect the people who have knowledge to the people who need it, to bring together people with different perspectives so they can understand each other better, and to empower everyone to share their knowledge for the benefit of the rest of the world.</p>
    </div>
    <div id="menu2" className="container tab-pane fade">
      <p>email: akashsharma.zak@gmail.com </p>
        <p>contact: 9625703834</p>
    </div>
  </div>
    )
}

export default Content