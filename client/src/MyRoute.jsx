
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import React from 'react'
import Layout from "./components/Layout";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";

const MyRoute = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={ <Layout/>}>
                <Route index element={<IndexPage/>}/>
                <Route path='/login' element={<LoginPage/> }/>
                </Route>
        </Routes>
    </Router>
  )
}

export default MyRoute