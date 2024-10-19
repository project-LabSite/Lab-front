const PublicationCard = ({ publicationItems }) => {
    const updatedPublicationItems = publicationItems.map((item) => {
        if (typeof item.author === 'string') {
            const authorsArray = item.author.split(', ').map((author) => author.trim());
            if (!authorsArray.includes('CH Park')) {
                authorsArray.push('CH Park');
            }
            item.author = authorsArray;
        }
        return item;
    });

    return (
        <div>
            {updatedPublicationItems.map((item, index) => (
                <div key={index} className="bg-white shadow-md mb-5 p-4">
                    <a href={item.publication_link}>
                        <div className="font-semibold">
                            {item.author.map((author, authorIndex) => (
                                <span key={authorIndex}>
                                    <span className={author === 'CH Park' ? 'text-blue-500' : ''}>{author}</span>
                                    {authorIndex < item.author.length - 1 ? ', ' : ' '}
                                </span>
                            ))}
                        </div>
                        <div className="text-lg font-bold mt-2">{item.title}</div>
                        <div className="mt-2">
                            <span className="text-gray-600">{item.journal}</span>
                        </div>
                    </a>
                </div>
            ))}
        </div>
    );
};

export default PublicationCard;
