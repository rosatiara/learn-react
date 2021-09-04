const Home = () => {
  const handleClick = () => {
    console.log("hello there!")
  }

  const handleClickAgain = (name) => {
    console.log("well, you again," + name);
  }

  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click me</button>
      <button onClick={()=>{handleClickAgain("rosa")}}>Click me again plz</button>
    </div>
   );
}
 
export default Home;