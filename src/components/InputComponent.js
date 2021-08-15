import React from 'react';
import {Input} from 'semantic-ui-react'


const InputComponent = ({ onInputChange, search, handleSearch, loading, onEnterPressed }) => {
    return (
        <div className="input-form">
            <Input
                fluid
                value = {search}
                onChange = {onInputChange}
                onKeyPress = {onEnterPressed}
                className = 'input-inner'
                action={{
                    content:'Search',
                    icon: 'search',
                    style: {'border-top-right-radius':'10px',
                        'border-bottom-right-radius':'10px'},
                    onClick: handleSearch,
                    color: 'red',
                    inverted: true,
                    basic: true,
                    loading:loading,
                }}
                placeholder='Search...'

            />
        </div>
    );
};

export default InputComponent;