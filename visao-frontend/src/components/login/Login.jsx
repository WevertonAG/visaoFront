import './Login.css';
import React from 'react';
import Logo from '../../assets/images/logo.png'


const Login = (props) =>
    <div className="login">
        <form>
            <div className="container">
                <div className="imagen">
                    <img src={Logo} alt="logo" height="150px" width="150px" />
                </div>
                <div className="log">
                    <label class="col-sm-2 col-form-label"><strong>Login</strong></label>
                </div>
                <hr />
                <label class="col-sm-2 col-form-label">Usuário:</label>
                <input type="text" class="form-control" placeholder="nome@gmail.com"></input>
                <label class="col-sm-2 col-form-label">Senha:</label>
                <input type="password" class="form-control mb-2" placeholder="********"></input>
                <button type="submit" className="btn mt-2 ml-2 btn-primary">Entrar</button>
                <hr />
                <a href="http://"><p className=" mt-3">Esqueci minha senha</p></a>
            </div>
        </form>
    </div>
export default Login;
