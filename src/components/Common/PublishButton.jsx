import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const PublishButton = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/publish');
    };

    return (
        <button
            onClick={handleClick}
            className="fixed bottom-32 right-12 bg-white text-blue-300 rounded-full p-4 shadow-lg hover:bg-blue-600 focus:outline-none"
        >
            <FontAwesomeIcon icon={faPen} size="lg" />
        </button>
    );
};

export default PublishButton;
