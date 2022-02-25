import { useQuery, gql } from "@apollo/client";
const GET_MOVIES = gql`
query {
movies(limit: 2, rating: 9.0) {
title
id
}
}
`;


const Home = () => {
    return(
        <h1>
            Home
        </h1>
    )
}

export default Home;