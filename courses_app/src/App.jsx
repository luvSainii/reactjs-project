import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter"
import "./App.css";
import { apiUrl, filterData } from "./data"
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function App() {
  let [courses, setCourses] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl)
        const output = await res.json();
          //save data into a variable
          console.log(output);
          setCourses(output.data)
      } catch (error) {
        toast.error("Something went wrong");
      }
    }
    fetchData();
  }, [])
    if(courses==null){
      <div className="loader">
      <div className="glitch">Loading...</div>
    </div>
    }
    else{
      return (
        <div className="Container">
          <Navbar />
          <Filter filterData={filterData} />
          <Cards courses={courses} />
        </div>
      );
    }

}

export default App;
