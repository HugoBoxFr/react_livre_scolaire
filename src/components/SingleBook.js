import React from 'react';
import './SingleBook.css';

function SingleBook(props) {

    return (
        <div className="SingleBook">
            <div className="title">
                <h3>{props.book.displayTitle}</h3>
            </div>
            <div className="cover">
                { props.book.url != null ? <img src={props.book.url} alt={props.book.displayTitle} /> : <p>Image indisponible</p>}
            </div>
        </div>
    );

}

export default SingleBook;