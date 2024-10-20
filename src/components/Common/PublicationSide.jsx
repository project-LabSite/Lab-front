const PublicationSide = ({ year, yearScroll, isSelected }) => {
    return (
        <div>
            <button
                onClick={yearScroll}
                className={`block w-32 h-16 text-white rounded transition-colors duration-200 ${
                    isSelected ? 'text-xl font-bold bg-blue-900' : 'bg-slate-800'
                } hover:bg-blue-800`}
            >
                {year === '2018' ? `${year}~` : year}
            </button>
        </div>
    );
};

export default PublicationSide;
