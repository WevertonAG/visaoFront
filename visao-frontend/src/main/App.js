import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

import { BrowserRouter } from 'react-router-dom';

import Nav from '../components/templates/Nav';
import Routes from './Routes'
import Footer from '../components/templates/Footer';


function App() {
    return (
    <BrowserRouter>
        <div className="app">
            <Nav />
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>
    )
}

export default App;