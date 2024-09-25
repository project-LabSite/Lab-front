const PublicationSide = ({ year, yearScroll, isSelected }) => {
    return (
        <div>
            <button
                onClick={yearScroll}
                className={`block py-4 w-32 text-white rounded ${
                    isSelected ? 'text-xl font-bold bg-slate-800' : ''
                } hover:bg-slate-700`}
            >
                {year}
            </button>
        </div>
    );
};

export default PublicationSide;
