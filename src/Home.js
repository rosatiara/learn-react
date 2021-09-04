import {useState} from 'react';

const Home = () => {
  // let name = 'mario';
  const[name, setName] = useState("mario")
  const [age, setAge] = useState(20)
  const handleClick = () => {
    setName("ronaldo")
    setAge(40)
  }


  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{name} is {age} years old</p>
      <button onClick={handleClick}>Click me</button>
    </div>
   );
}
 
export default Home;
