import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import SingleBook from './SingleBook';
import './Books.css';


const GET_BOOKS = gql`
    query {
        viewer {
            books {
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

class Books extends React.Component {   
    constructor(props) {
        super(props);

        this.myClick = this.myClick.bind(this);
    }

    myClick() {
        alert("Ce livre ne vous est pas accessible.");
    }

    render() {
        return (
            <main>
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
                                <h2>Votre bibliothèque</h2>
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

                <Query query={GET_BOOKS}>
                    {({loading, error, data}) => {
                        if (loading) {
                            return <div>Loading</div>
                        }

                        if (error) {
                            return <div>Error: { error.toString()}</div>
                        }

                        return (
                            <div>
                                <h2>Bientôt disponible</h2>
                                <div className="Books">
                                    {
                                        data.viewer.books.hits.slice(0, 15).map((b) => 
                                            b.displayTitle !== null ? 
                                                <div key={b.id} className="Book"  onClick={this.myClick}>
                                                    { b.displayTitle !== null ? <SingleBook book={b} /> : '' }
                                                </div>
                                            : ''
                                        )
                                    }
                                </div>
                            </div>
                        )
                    }}
                </Query>
            </main>
        );
    }
}

export default Books;
