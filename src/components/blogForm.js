import Nav from './nav';
import Content from './tabpane';

const BlogForm = ({user, setUser}) => {
    return (
    <div>
        <Nav user={user} setUser={setUser} />
        <Content />
    </div>
    )
}

export default BlogForm