import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Book from './components/Book';


const client = new ApolloClient({
  uri: "https://api-dev.lelivrescolaire.fr/graphql"
});

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Bienvenue sur "Le Livre Scolaire"</h1>
        <ApolloProvider client={client}>
          <Book id={1339497}/>
        </ApolloProvider>
      </div>
    );
  }
}

export default App;