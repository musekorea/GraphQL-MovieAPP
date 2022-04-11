import React from "react";

import { gql, useQuery } from "@apollo/client";
import Movie from "../components/Movie";
const graphQuery = gql`
	query GetMovies {
		movies {
			id
			title
			medium_cover_image
		}
	}
`;

const Home = () => {
	const { loading, error, data } = useQuery(graphQuery);
	console.log(data);
	if (loading) {
		return <h1>Loading</h1>;
	}
	if (!loading && data && data.movies) {
		return (
			<div>
				{data.movies.map((movie) => (
					<Movie key={movie.id} id={movie.id} />
				))}
			</div>
		);
	}
};

export default Home;
