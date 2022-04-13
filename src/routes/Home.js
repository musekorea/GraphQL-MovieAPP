import React from "react";

import { gql, useQuery } from "@apollo/client";
import Movie from "../components/Movie";
import "../styles.scss";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
const graphQuery = gql`
	query GetMovies {
		movies(limit: 20, sort_by: "year") {
			id
			title
			medium_cover_image
			background_image
			rating
			year
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
				<Sidebar></Sidebar>
				<div className="movieList">
					{data.movies.map((movie) => (
						<Movie
							key={movie.id}
							id={movie.id}
							title={movie.title}
							poster={movie.medium_cover_image}
							rating={movie.rating}
							year={movie.year}
							background_image={movie.background_image}
						/>
					))}
				</div>
			</div>
		);
	}
};

export default Home;
