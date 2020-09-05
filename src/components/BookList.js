// import React from 'react';
// import gql from 'graphql-tag';
// import { Query } from 'react-apollo';
// import SingleBook from './SingleBook';
// import './Books.css';

// const GET_BOOKS = gql`
//     query {
//         viewer {
//             books {
//                 hits {
//                     id
//                     displayTitle
//                     url
//                     subjects {
//                         name
//                     }
//                     levels {
//                         name
//                     }
//                 }
//             }
//         }
//     }
// `;

// class BookList extends React.Component {   
//     constructor(props) {
//         super(props);
//         this.state = {
//             slice: this.props.slice,
//         };
//         console.log(this.state.slice)

//         this.myClick = this.myClick.bind(this);
//     }

//     myClick() {
//         alert("Ce livre ne vous est pas accessible. Rendez vous dans votre espace.");
//     }

//     render() {
//         return (
//             <Query query={GET_BOOKS}>
//                 {({loading, error, data}) => {
//                     if (loading) {
//                         return <div>Loading</div>
//                     }

//                     if (error) {
//                         return <div>Error: { error.toString()}</div>
//                     }

//                     return (
//                         <div>
//                             <div className="Books">
//                                 {
//                                     data.viewer.books.hits.map((b) => 
//                                         b.displayTitle !== null ? 
//                                             <div key={b.id} className="Book"  onClick={this.myClick}>
//                                                 { b.displayTitle !== null ? <SingleBook book={b} /> : '' }
//                                             </div>
//                                         : ''
//                                     )
//                                 }
//                             </div>
//                         </div>
//                     )
//                 }}
//             </Query>
//         );
//     }
// }

// export default BookList;
