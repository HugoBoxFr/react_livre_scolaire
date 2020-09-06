import React from 'react';
import { Query } from 'react-apollo';
import SingleBook from './SingleBook';
import './Books.css';
import * as Constants from './../constants';

class Books extends React.Component {  
    constructor(props) {
        super(props);
        this.state = {
            slice: this.props.slice,
        };
    }

    // myClick() {
    //     alert("Ce livre n'est pas encore disponible, rendez vous dans votre espace.");
    // }

    // addBook(id) {
    //     console.log(id);
    // }

    render() {
        return (
            <Query query={Constants.GET_BOOKS}>
                {({loading, error, data}) => {
                    if (loading) {
                        return <div>Loading</div>
                    }

                    if (error) {
                        return <div>Error: { error.toString()}</div>
                    }

                    if (this.props.slice === null) {
                        this.setState({ slice : data.viewer.books.hits.length});
                    }

                    return (
                        <div>
                            <div className="Books">
                                {
                                    data.viewer.books.hits.slice(0, this.state.slice).map((b) => 
                                        b.displayTitle !== null ? 
                                            // <div key={b.id} className="Book" onClick={this.myClick} >
                                            <div key={b.id} className="Book">
                                                { b.displayTitle !== null ? <SingleBook book={b} rent={true} /> : '' }
                                            </div>
                                        : '' 
                                    )
                                }
                            </div>
                        </div>
                    )
                }}
            </Query>
        );
    }
}

export default Books;
