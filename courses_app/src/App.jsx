import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Spinner from "./components/Spinner";
import "./App.css";
import { apiUrl, filterData } from "./data"
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function App() {
  let [courses, setCourses] = useState(null);
  let [loading, setLoading] = useState(true);
  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch(apiUrl)
      const output = await res.json();
      //save data into a variable
      console.log(output);
      setCourses(output.data)
    } catch (error) {
      toast.error("Something went wrong");
    }
    setLoading(false)
  }
  useEffect(() => {
    fetchData();
  }, [])

    return (
      <div className="Container">
        <div><Navbar /></div>
        <div><Filter filterData={filterData} /></div>
        <div>
          { loading ?(<Spinner/>):(<Cards courses={courses} />)}
        </div>
      </div>
    );
  }


export default App;
