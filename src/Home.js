import {useState, useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    {title: "My new website", body: "Lorem ipsum...", author: "mario", id: 1},
    {title: "How to center a div", body: "Lorem ipsum...", author: "rosa", id: 2},
    {title: "CSS is Fun", body: "Lorem ipsum...", author: "rosa", id: 3},
  ])

  const [name, setName] = useState("rony")

  const handleDelete = (id) => {
    const newBlogs =  blogs.filter(blog => blog.id !== id)
    setBlogs(newBlogs)
  }

  useEffect(()=>{
    console.log("hi")
    console.log(name)
  }, [name])

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      <button onClick={() => setName("rony junior")}>change name</button>
      <p>{name}</p>
    </div>
   );
}
 
export default Home;
