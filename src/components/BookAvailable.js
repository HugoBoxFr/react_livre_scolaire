import React from 'react';
import { Query } from 'react-apollo';
import SingleBook from './SingleBook';
import DisplayBook from './DisplayBook';
import './Books.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import * as Constants from './../constants';

class BookAvailable extends React.Component {   
    render() {
        return (
            <Router>
                <Query query={Constants.GET_ONE_BOOK} variables={{ id: `${this.props.id}` }}>
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
                                        <Link to={`/bibliotheque/${b.id}`} key={b.id} className="Book">
                                            {/* { b.displayTitle !== null ? <SingleBook book={b}/> : '' } */}
                                            { b.displayTitle !== null ? <SingleBook book={b}><SelectedBook bookid={b.id}/></SingleBook> : '' }
                                        </Link>
                                    )
                                }
                            </div>
                        )
                    }}
                </Query>

                <Switch>
                    <Route path="/bibliotheque/:id" component={SelectedBook} />
                </Switch>
            </Router>
        );
    }
}

function SelectedBook(b) {
    return (
      <div className="App">
          <DisplayBook bookid={b} />
      </div>
    );
}

export default BookAvailable;
