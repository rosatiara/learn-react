import {useState} from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    {title: "My new website", body: "Lorem ipsum...", author: "mario", id: 1},
    {title: "How to center a div", body: "Lorem ipsum...", author: "rosa", id: 2},
    {title: "CSS is Fun", body: "Lorem ipsum...", author: "rosa", id: 3},
  ])
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" />
      <BlogList blogs={blogs.filter((blog) => blog.author === "rosa")} title="Rosa's blogs" />
      <BlogList blogs={blogs.filter((blog) => blog.author === "mario")} title="Mario's blogs" />
    </div>
   );
}
 
export default Home;
