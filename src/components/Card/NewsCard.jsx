import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const NewsCard = ({ item }) => {
    return (
        <div className="bg-white shadow-md mb-5 p-4 w-11/12">
            <div className="mx-auto flex flex-col justify-around">
                <div className="font-bold text-xl">{item.content}</div>
                <div className="text-sm flex flex-row justify-end">
                    <div>{item.day}</div>
                    <FontAwesomeIcon className='m-1' icon={faEye} />
                    <div>{item.view}</div>
                </div>
            </div>
        </div>
    );
};


export default NewsCard;