import React from "react";
import Main from "../templates/Main";

const headerProps ={
    icon: 'dashboard',
    title: 'Dashboard'
}

const Dashboard = (props) =>
 <Main {...headerProps}>
    <h1> Passei aqui </h1>
</Main>

export default Dashboard;