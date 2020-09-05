import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Books from './components/Books';
import BookAvailable from './components/BookAvailable';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


const client = new ApolloClient({
  uri: "https://api-dev.lelivrescolaire.fr/graphql"
});

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="NavBar">
            <ul>
              <li>
                <Link to="/">Accueil</Link>
              </li>

              <li>
                <Link to="/livres">Tous les livres</Link>
              </li>

              <li>
                <Link to="/bibliotheque">Votre bibliothèque</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route exact path="/bibliotheque">
              <MyBooks />
            </Route>

            <Route exact path="/livres">
              <OurBooks />
            </Route>

            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

function Home() {
  return (
    <div className="App">
      <h1>Bienvenue sur "Le Livre Scolaire"</h1>
      <ApolloProvider client={client}>
        <h2>Vos livres disponibles</h2>
        <BookAvailable />

        <h2>Une sélection de livres...</h2>
        <Books slice={15}/>
      </ApolloProvider>
    </div>
  );
}

function OurBooks() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <h2>Notre liste de livres scolaires</h2>
        <Books />
      </ApolloProvider>
    </div>
  );
}

function MyBooks() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <h2>Ma bibliothèque</h2>
        <BookAvailable />
      </ApolloProvider>
    </div>
  );
}

export default App;