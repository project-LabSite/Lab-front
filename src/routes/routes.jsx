import '../assets/styles/tailwind.css';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from '../Layout/Nav/Nav';
import Main from '../pages/Main/Main';
import Publication from '../pages/Publication/Publication';
import Sign from '../pages/Sign/Sign';
import TextEditor from '../components/Common/TextEditor';
import Modal from '../components/Modal/Modal';
import Footer from '../Layout/Footer/Footer';

function App() {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    const openLoginModal = () => setIsLoginModalOpen(true);
    const closeLoginModal = () => setIsLoginModalOpen(false);

    return (
        <BrowserRouter>
            <Nav openLoginModal={openLoginModal} />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/publication" element={<Publication />} />
                <Route path="/sign" element={<Sign />} />
                <Route path="/ckeditor5" element={<TextEditor/>}/>
            </Routes>
            {isLoginModalOpen && (
                <Modal isOpen={isLoginModalOpen} onClose={closeLoginModal}>
                    <Sign />
                </Modal>
            )}
            <Footer />
        </BrowserRouter>
    );
}

export default App;
