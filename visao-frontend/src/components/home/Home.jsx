import React from "react";
import Main from "../templates/Main";
import Contabilidade from '../../assets/images/contabilidade.jpg';


const Home = (props) => 
    
    <Main icon="home" title="inicio">
        <div className="container-fluid">
            <div className="display-6">Bem Vindo!</div>
                <hr />
                <img src={Contabilidade} width='300px' height='300px' alt="Contabilidade"></img>
                <hr />
            <p className="mb-0">Contabilidade completa, responsável e eficiente para empressas que cooperam com o setor produtivo.</p>
        </div>
    </Main>
export default Home;