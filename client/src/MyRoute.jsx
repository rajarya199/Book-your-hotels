
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import React from 'react'
import Layout from "./components/Layout";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";
import { UserContextProvider } from "./UserContext";


import ProfilePage from "./pages/ProfilePage";
import PlacesPage from "./pages/PlacesPage";
import PlaceForm from "./pages/PlaceForm";

const MyRoute = () => {
  return (
    <UserContextProvider>
         <Router>
        <Routes>
            < Route path='/' element={ <Layout/>}>
                <Route index element={<IndexPage/>}/>
                <Route path='/login' element={<LoginPage/> }/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/account' element={<ProfilePage/>}/>
                <Route path='/account/places' element={<PlacesPage/>}/>
                <Route path='/account/places/new' element={<PlaceForm/>}/>
                </Route>
        </Routes>
    </Router>
    </UserContextProvider>
   
  )
}

export default MyRoute