// import logo from './logo.svg';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import NewsLists from './components/Dashboard/NewsLists';
// import Firebase from "./components/Firebase"

function App() {
  const [data, setdata] = useState([]);
  const [toggle_button, settoggle_button] = useState(false)
  const [feedback, setfeedback] = useState(false)
  useEffect(() => {
    const API_data = async () => {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
      setdata(response.data);
    };
    API_data();
  }, [])

  // const ref=Firebase.firebase().collection("userdata")
  //   console.log(ref);


  const deletedata = (id) => {
    // const filterdata=data.filter((ndata)=>ndata.name!=id)
    setdata(data.filter(note => note.id !== id))
  }

  // console.log(data);
  return (
    <div className="main-container">
      <div className="imp">


        <Dashboard settoggle_button={settoggle_button} toggle_button={toggle_button} setfeedback={setfeedback} feedback={feedback} />

      </div>

      <div className={`por ${feedback?"abc":""}`}>
         <NewsLists data={data} toggle_button={toggle_button} deletedata={deletedata} />

      </div>

    </div>
  );
}

export default App;
