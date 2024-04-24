
import hotel from '/hotel.png'
import './App.css'
import MyRoute from './MyRoute'
import axios from "axios" 
axios.defaults.baseURL='http://localhost:4000';
axios.defaults.withCredentials=true;
function App() {
  
  return (
    <>
      <MyRoute/>
      
    </>
  )
}

export default App
