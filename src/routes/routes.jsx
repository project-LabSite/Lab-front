import '../assets/styles/tailwind.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from '../Layout/Nav/Nav';
import Main from '../pages/Main/Main';
import Publication from '../pages/Publication/Publication';
import Footer from '../Layout/Footer/Footer';

function App() {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/publication" element={<Publication />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
