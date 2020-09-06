import gql from 'graphql-tag';
import ApolloClient from 'apollo-boost';

export const GRAPHQL_API = new ApolloClient({
    uri: "https://api-dev.lelivrescolaire.fr/graphql"
});

export const GET_BOOKS = gql`
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

export const GET_ONE_BOOK = gql`
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