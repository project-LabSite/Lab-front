const PublicationSide = ({ year, yearScroll }) => {
    return (
        <div className="mb-2">
            <button onClick={yearScroll} className="block py-2 px-4 text-white hover:bg-slate-700 rounded">
                {year}
            </button>
        </div>
    );
};

export default PublicationSide;
