import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "../styles.scss";

const graphQuery = gql`
	query GetMovie($id: Int!) {
		movie(id: $id) {
			id
			title
			medium_cover_image
			description_full
			rating
			year
			background_image
		}
	}
`;

const Detail = () => {
	const { id } = useParams();
	const { loading, error, data } = useQuery(graphQuery, {
		variables: {
			id: Number(id),
		},
	});
	if (data) {
		console.log(data.movie);
	}
	if (loading) {
		return (
			<div className="containerLoading">
				<Header></Header>
				<Sidebar></Sidebar>
				<h1 className="loading">Loading</h1>;
			</div>
		);
	}
	if (!loading && data && data.movie) {
		return (
			<div className="detailContainer">
				<Header></Header>
				<Sidebar></Sidebar>
				<div className="detailBox">
					<div className="detailLeft">
						<img
							className="backgroundImage"
							src={data.movie.background_image}
							alt="background"
						/>
						<p className="description">{data.movie.description_full}</p>
					</div>
					<div className="detailRight">
						<h1 className="title">{data.movie.title}</h1>
						<div className="ratingBox">
							<span className="rating">Rating {data.movie.rating}</span>
							<span>Year {data.movie.year}</span>
						</div>

						<img
							className="poster"
							src={data.movie.medium_cover_image}
							alt="poster"
						/>
					</div>
				</div>
			</div>
		);
	}
};

export default Detail;
