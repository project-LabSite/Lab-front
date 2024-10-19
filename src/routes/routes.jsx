import '../assets/styles/tailwind.css';
import { useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Nav from '../Layout/Nav/Nav';
import Main from '../pages/Main/Main';
import Publication from '../pages/Publication/Publication';
import Contact from '../pages/Contact/Contact';
import Sign from '../pages/Sign/Sign';
import TextEditor from '../components/Common/TextEditor/TextEditor';
import Modal from '../components/Modal/Modal';
import PublishButton from '../components/Common/PublishButton';
import Footer from '../Layout/Footer/Footer';

function App() {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    const openLoginModal = () => setIsLoginModalOpen(true);
    const closeLoginModal = () => setIsLoginModalOpen(false);

    return (
        <BrowserRouter>
            <Nav openLoginModal={openLoginModal} />
            <AppRoutes />
            {isLoginModalOpen && (
                <Modal isOpen={isLoginModalOpen} onClose={closeLoginModal}>
                    <Sign />
                </Modal>
            )}
            <Footer />
        </BrowserRouter>
    );
}

function AppRoutes() {
    const location = useLocation();

    return (
        <>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/publication" element={<Publication />} />
                <Route path='/contact' element={<Contact />} />
                <Route path="/sign" element={<Sign />} />
                <Route path="/publish" element={<TextEditor />} />
            </Routes>
            {(location.pathname === '/research' || location.pathname === '/news') && <PublishButton />}
        </>
    );
}

export default App;
