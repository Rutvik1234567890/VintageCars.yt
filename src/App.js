import "./App.css";
import Navbar from "./Components/Navbar";
import Rightbar from "./Components/Rightbar";
import Post from "./Components/Post";
import Sidebar from "./Components/Sidebar";
import { data,data2  } from './Data'



function App() {
  return (
    <>
      <Navbar />

     <div className="container">
       
        <div className="side_bar">
          <Sidebar />
        </div>

         <div className="post_section">
          {data.map((d)=> (
            <Post key={d.id} data={d} />
          ))}
           
           
        </div> 

        <div className="right_bar">
        {data2.map((d)=> (
            <Rightbar key={d.id} data={d} />
          ))}
        </div>
     
      </div> 
    </>
  );
}

export default App;



