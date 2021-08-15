import 'semantic-ui-css/semantic.min.css'

import './App.css';
import axios from 'axios'
import {useState} from 'react'

import Header from './components/Header'
import Main from './components/Main'
import Popup from './components/Popup.js'

function App() {    
    const apiUrl = 'https://kinopoiskapiunofficial.tech/api/v2.1/films/'
    const [state, setState] = useState({
        search: '',
        results: [],
        selected: {},
        error: '',
        loading: false,
    })

    const onInputChange = e => {
        let s = e.target.value;
        setState(prevState => {
            return {...prevState, search: s}
        })
    }
    const onEnterPressed = e => {
        if (e.key === 'Enter' && state.search !== '') {
            handleSearch()
        }
    }
    const handleSearch = () => {
        setState(prevState => {
            return {...prevState, loading: true}
        });
        axios({
            method: 'get',
            url: apiUrl + 'search-by-keyword?keyword=' + state.search,

            headers: {
                'accept': 'application/json',
                'X-API-KEY': '64179697-11f6-46b5-8507-e31405e10c13'
            }
        })
        .then(
            ({data}) => {
                let results = data.films;
                if (results.length > 0) {
                    setState(prevState => {
                        return {...prevState, results: results, error: '', loading: false}
                    })
                } else {
                    setState(prevState => {
                        return {...prevState, error: 'No movies found by your request.', loading: false}
                    })
                }
            }
        )
        .catch(error => console.log('Error: ', error))
    }

    const openPopup = id => {
        axios({
            method: 'get',
            url: apiUrl + id + '?append_to_response=BUDGET&append_to_response=RATING',

            headers: {
                'accept': 'application/json',
                'X-API-KEY': '64179697-11f6-46b5-8507-e31405e10c13'
            }
        })
        .then(({data}) => {
            let result = data;
            console.log(data)
            setState(prevState => {
                return {...prevState, selected: result}
            })
        })
        .catch(error => console.log(error))
    }

    const closePopup = () => {
        setState(prevState => {
            return {...prevState, selected: {}}
        })
    }

    return (
        <div className='app'>
            <Header/>
            <Main
                onInputChange={onInputChange}
                search={state.search}
                handleSearch={handleSearch}
                results={state.results}
                error={state.error}
                loading={state.loading}
                onEnterPressed={onEnterPressed}
                openPopup={openPopup}
            />
            {typeof state?.selected?.data?.nameRu != 'undefined' ? (
                <Popup  selected={state.selected} closePopup={closePopup}/>) : false}
        </div>
    );
}

export default App;
