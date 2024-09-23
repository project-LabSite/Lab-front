import '../assets/styles/tailwind.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from '../Layout/Nav/Nav';
import Main from '../pages/Main/Main';
import Publication from '../pages/Publication/Publication';
import Login from '../pages/Login/Login';
import Signup from '../pages/Signup/Signup'
import Footer from '../Layout/Footer/Footer';

function App() {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/publication" element={<Publication />} />
                <Route path="/signin" element={<Login />} />
                <Route path='/signup' element={<Signup/>}/>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
