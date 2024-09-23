const PublicationCard = ({ publicationItems }) => {
    return (
        <div>
            {publicationItems.map((item, index) => (
                <a href={item.publication_link } className="bg-white shadow-md">
                    <div key={index} className="mb-5">
                        <div>
                            {item.author} {item.year}
                        </div>
                        <div>{item.title}</div>
                        <div>
                            <span className="text-blue-500">{item.journal}</span>
                        </div>
                    </div>
                </a>
            ))}
        </div>
    );
};

export default PublicationCard;
