import React from 'react';

function DisplayBook(props) {
    return (
        <div>
            {console.log(props.bookid.match.params)}
        </div>
    );
}

export default DisplayBook;