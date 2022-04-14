import React from "react";
import { useParams, Link } from "react-router-dom";
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
		suggestion(id: $id) {
			id
			title
			medium_cover_image
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
	if (loading) {
		return (
			<div className="containerLoading">
				<Header></Header>
				<Sidebar></Sidebar>
				<h1 className="loading">Loading</h1>;
			</div>
		);
	}
	if (!loading && data && data.movie && data.suggestion) {
		const suggestionLists = [...data.suggestion];
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
						<h1 className="suggestionTitle">Suggestion Movies</h1>
						<div className="suggestionBox">
							{suggestionLists.map((movie, index) => {
								if (index === 0) {
									return <div key={movie.id}></div>; //그냥 위에서 처리해야 겠구만
								} else {
									return (
										<Link to={`/${movie.id}`} key={movie.id}>
											<img
												className="suggestion"
												src={movie.medium_cover_image}
												style={{ width: "120px" }}
											></img>
										</Link> //Key값은 Link에 줘야 error 안남
									);
								}
							})}
						</div>
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
