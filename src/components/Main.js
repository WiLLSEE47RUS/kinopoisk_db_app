import React from 'react';
import InputComponent from './InputComponent'
import Results from './Results'

const Main = ({ onInputChange, search, handleSearch,
                  results, error, loading, onEnterPressed, openPopup }) => {
    return (
        <main className="app_main">
            <InputComponent
                onInputChange = {onInputChange}
                search = {search}
                handleSearch = {handleSearch}
                loading = {loading}
                onEnterPressed = {onEnterPressed}
            />
            {error === ''?
                (<Results
                    openPopup = {openPopup}
                    results = {results}
                />)
                : (<div className="error">{error}</div>)}
        </main>
    );
};

export default Main;