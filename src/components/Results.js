import React from 'react';
import ResultItem from './Result.js'

const Results = ({ results, openPopup }) => {
    return (
        <section className="results">
            {results.map((result, i) =>{
                return (
                    <ResultItem
                        result = {result}
                        openPopup = {openPopup}
                        key = {i}
                    />
                )
            })}
        </section>
    );
};

export default Results;