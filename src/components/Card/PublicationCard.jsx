const PublicationCard = ({ publicationItems }) => {
  const updatedPublicationItems = publicationItems.map((item) => {
    if (typeof item.authors === "string") {
      const authorsArray = item.authors
        .split(", ")
        .map((author) => author.trim());
      if (!authorsArray.includes("CH Park")) {
        authorsArray.push("CH Park");
      }
      item.authors = authorsArray;
    }
    return item;
  });

  return (
    <div>
      {updatedPublicationItems.map((item, index) => (
        <div
          key={index}
          className="bg-white shadow-md mb-5 p-6 rounded-lg hover:shadow-lg transition-shadow duration-200"
        >
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="font-semibold text-gray-800">
              {item.authors.map((author, authorIndex) => (
                <span key={authorIndex}>
                  <span className={author === "CH Park" ? "text-blue-500" : ""}>
                    {author}
                  </span>
                  {authorIndex < item.authors.length - 1 ? ", " : " "}
                </span>
              ))}
            </div>
            <div className="text-lg font-bold mt-2 text-gray-800 hover:underline">
              {item.title}
            </div>
            <div className="mt-2 text-gray-600">
              <span>{item.publicationInfo}</span>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default PublicationCard;
