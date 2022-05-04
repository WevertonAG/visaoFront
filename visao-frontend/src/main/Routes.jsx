import React from "react";
import {Routes, Route} from "react-router-dom";

import Login from "../components/login/Login"
import Home from "../components/home/Home";
import Groups from "../components/groups/Grupos";
import Dashboard from "../components/dashboard/Dashboard";


const Rotas = (props) =>
    <Routes>
        <Route path="/Login" element = {<Login/>}/>
        <Route exact path="/" element = {<Home />}/>
        <Route path="/Grupos" element = {<Groups />}/>
        <Route path="/Dashboard" element = {<Dashboard />}/>
        <Route path="*" element = {<Home />}/>
    </Routes>
export default Rotas