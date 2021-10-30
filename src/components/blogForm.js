import Nav from './nav';
import Content from './tabpane';

const BlogForm = ({user}) => {
    return (
    <div>
        <Nav user={user} />
        <Content />
    </div>
    )
}

export default BlogForm