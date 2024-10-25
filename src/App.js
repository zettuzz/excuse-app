import Axios from 'axios';
import{useState, useEffect} from 'react';
import './App.css';


function App() {
  const [generateExcuse, setgenerateExcuse] = useState("");
  
  const fetchExcuse = (excuse) =>{
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}`)
    .then(res =>{
      setgenerateExcuse(res.data[0].excuse);
    })
    .catch(err => {
      console.error("Error fetching excuse:", err);
      setgenerateExcuse("Failed to fetch excuse.");
    });
  }

  return (
    <div className="App">
     <h1>Dumb Excuse</h1> 
     <button onClick={() => fetchExcuse("party")}>Family Excuse</button>
     <button onClick={() => fetchExcuse("family")}>Family Excuse</button>
     <button onClick={() => fetchExcuse("office")}>Office Excuse</button>

     <p>{generateExcuse}</p>
    </div>
  );
}

export default App;
