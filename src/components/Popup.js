import React from 'react';
import { Rating, Button } from 'semantic-ui-react'

const Popup = ({selected, closePopup}) => {
    let imdbLink = 'https://www.imdb.com/title/' + selected.externalId.imdbId
    let genres = selected.data.genres.map((el, index, arr) => {
        if (index === 0) {
            return el.genre[0].toUpperCase() + el.genre.slice(1) + ', '
        } else if (index !== arr.length - 1) {
            return el.genre + ', '
        } else {
            return el.genre + '.'
        }
    })

    let countries = selected.data.countries.map((el, index, arr) => {
        if (index === 0 && arr.length >1) {
            return el.country + ', '
        } else if (index !== arr.length - 1) {
            return el.contry + ', '
        } else {
            return el.country + '.'
        }
    })

    return (
        <section className="popup">
            <div className="content">

                <h2>{selected.data.nameRu} <span>({selected.data.year})</span></h2>
                <p className="rating">Рейтинг: {selected.rating.rating || 'N/A'}</p>
                <Rating
                    defaultRating={selected.rating.rating}
                    maxRating={10}
                    disabled
                    size = 'huge'
                />
                <Button className = 'close-btn' negative onClick={closePopup}>Закрыть</Button>
                <div className="plot">
                    <img src={selected.data.posterUrl} alt="Poster"/>
                    <p>
                        {selected.data.description || <span style={{color: "#fff", 'font-weight': '700'}}>Описание скоро появится.</span>}
                        <br/><br/>
                        <span>Жанр</span>: { genres }
                        <br/><br/>
                        <span>Страна</span>: {countries || 'N/A'}
                        <br/><br/>
                        <span>Прокат в России: </span> {selected.data.distributorRelease || 'N/A'}.
                        <br/><br/>
                        <span>Бюджет</span>: {selected.budget.budget || 'N/A'}.
                    </p>

                </div>

               <div className='btn-links'>
                   <a href={selected.data.webUrl} target='_blank' rel='noreferrer'>
                        <Button className = 'openkp-btn' positive>Открыть КиноПоиск</Button>
                    </a>
                    <a href= {imdbLink} target='_blank' rel='noreferrer'>
                        <Button className = 'openimdb-btn' positive>Открыть IMDB</Button>
                    </a>
               </div>
            </div>
        </section>
    );
};

export default Popup;