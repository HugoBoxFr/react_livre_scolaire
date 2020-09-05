import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Books from './components/Books';


const client = new ApolloClient({
  uri: "https://api-dev.lelivrescolaire.fr/graphql"
});

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Bienvenue sur "Le Livre Scolaire"</h1>
        <ApolloProvider client={client}>
          <Books id={1339497}/>
        </ApolloProvider>
      </div>
    );
  }
}

export default App;