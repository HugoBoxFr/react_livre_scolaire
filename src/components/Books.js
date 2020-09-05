import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import SingleBook from './SingleBook';
import './Books.css';

// (ids: 1339497)
const GET_BOOKS = gql`
    query {
        viewer {
            books {
                hits{
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

class Books extends React.Component {   
    render() {
        return (
            <Query query={GET_BOOKS} variables={{ id: `${this.props.id}` }}>
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
                                    b.displayTitle !== null ? 
                                        <div key={b.id} className="Book">
                                            { b.displayTitle !== null ? <SingleBook book={b}/> : '' }
                                        </div>
                                    : ''
                                )
                            }
                        </div>
                    )
                }}
            </Query>
        );
    }
}

export default Books;
