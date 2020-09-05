import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_BOOKS = gql`
    query {
        viewer {
            books(ids: 1339497) {
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

class BookTest extends React.Component {        
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
                                            <h2>{b.subjects[0].name}</h2>
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

export default BookTest;