import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "./pages/MainPage";
import Category from "./pages/Category";
import Account from "./pages/Account";
import MySideMenu from "./components/MySideMenu";
import React from 'react'

function App() {
    return (
        <div>
            <MySideMenu/>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MainPage/>}/>
                    <Route path='/category' element={<Category/>}/>
                    <Route path='/account' element={<Account/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
