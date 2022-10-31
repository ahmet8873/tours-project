import "./App.css";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Tours from "./components/Tours";

const url = "http://localhost:3001/tours";

function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);
    try {
     const res = await fetch(url);
    const data = await res.json();
    setLoading(false)
    setTours(data);
   

    } catch (error) {
      console.log(error)
    }
 };
  
  useEffect(()=>{
   fetchTours()
    },[])


  const deleteTour=(id)=>{
    const newTours=tours.filter((tour)=>tour.id!==id)
    setTours(newTours)
  }

  if (loading) {
    return (
      <main>
        <Loading></Loading>
      </main>
    );
  }
  if(tours.length===0){
    return(
      <main className="title">
        <h2>No Tours</h2>
        <button className="delete" onClick={()=>fetchTours()}>refresh</button>
      </main>
    )
  }

  return (
    <main className="main">
      <Tours tours={tours} deleteTour={deleteTour} />
    </main>
  );
}

export default App;
