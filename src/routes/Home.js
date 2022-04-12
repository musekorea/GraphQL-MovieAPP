import React from "react";

import { gql, useQuery } from "@apollo/client";
import Movie from "../components/Movie";
import "../styles.scss";
import Header from "../components/Header";
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
	if (loading) {
		return (
			<div className={"container containerLoading"}>
				<Header></Header>
				<h1 className="loading">Loading... Please wait</h1>;
			</div>
		);
	}
	if (!loading && data && data.movies) {
		return (
			<div className="container">
				<Header />
				<h1 className="sort">New Releases</h1>
				<div className="movieList">
					{data.movies.map((movie) => (
						<Movie
							key={movie.id}
							id={movie.id}
							title={movie.title}
							image={movie.medium_cover_image}
						/>
					))}
				</div>
			</div>
		);
	}
};

export default Home;
