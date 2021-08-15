import React from 'react';

const ResultItem = ({ result, openPopup }) => {
    return (
        <div className="result" onClick={() => openPopup(result.filmId)}>
            <img src={result.posterUrl} alt="poster" className="poster"/>
            <h3 className='filmName'>{result.nameRu}</h3>
        </div>
    );
};

export default ResultItem;