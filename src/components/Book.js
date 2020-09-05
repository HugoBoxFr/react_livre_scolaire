import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import SingleBook from './SingleBook';

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

class Book extends React.Component {        
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
                        <div>
                            {
                                data.viewer.books.hits.map((b) => {
                                    return (
                                        <div key={b.id}>
                                            <SingleBook book={b} />
                                        </div>
                                    );
                                })
                            }
                        </div>
                    )
                }}
            </Query>
        );
    }
}

export default Book;
