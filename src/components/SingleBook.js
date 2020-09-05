import React from 'react';


function SingleBook(props) {

    return (
        <div>
            <p>{props.book.displayTitle}</p>
            <img src={props.book.url} alt={props.book.displayTitle} />
        </div>
    );

}

export default SingleBook;