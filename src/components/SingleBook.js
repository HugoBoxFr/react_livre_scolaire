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
            <button onClick={props.rent === true ? () => rentBook(props) : () => returnBook(props)}>{props.rent === true ? 'Emprunter' : 'Rendre'}</button>
        </div>
    );
}

function rentBook(props) {
    console.log(`Vous avez emprunté le libre ${props.book.displayTitle}`);
    // push
}

function returnBook(props) {
    console.log(`Le libre ${props.book.displayTitle} a été rendu`);
    // splice
}

export default SingleBook;