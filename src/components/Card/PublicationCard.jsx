const PublicationCard = ({ publicationItems }) => {
    return (
        <div>
            {publicationItems.map((item, index) => (
                <div className="bg-white shadow-md">
                    <div key={index} className="mb-5">
                        <div>
                            <span className="text-blue-500 font-bold">{item.Author}</span>
                            {item.Authors} {item.Year}
                        </div>
                        <div>{item.Title}</div>
                        <div>
                            <span className="text-blue-500">{item.Journal}</span> {item.Volume}, {item.Page}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PublicationCard;
