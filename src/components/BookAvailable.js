import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import SingleBook from './SingleBook';
import './Books.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


const GET_ONE_BOOK = gql`
    query {
        viewer {
            books (ids: 1339497){
                hits {
                    id
                    displayTitle
                    url
                    subjects {
                        name
                    }
                    levels {
                        name
                    }
                }
            }
        }
    }
`;

class BookAvailable extends React.Component {   
    render() {
        return (
            <Query query={GET_ONE_BOOK} variables={{ id: `${this.props.id}` }}>
                {({loading, error, data}) => {
                    if (loading) {
                        return <div>Loading</div>
                    }

                    if (error) {
                        return <div>Error: { error.toString()}</div>
                    }

                    return (
                        <div className="Books">
                            {
                                data.viewer.books.hits.map((b) => 
                                    <div key={b.id} className="Book">
                                        { b.displayTitle !== null ? <SingleBook book={b}/> : '' }
                                    </div>
                                )
                            }
                        </div>
                    )
                }}
            </Query>
        );
    }
}

export default BookAvailable;
