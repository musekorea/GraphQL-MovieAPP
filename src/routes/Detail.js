import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const graphQuery = gql`
	query GetMovie($id: Int!) {
		movie(id: $id) {
			id
			title
			medium_cover_image
			description_full
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
		return <h1>Loading</h1>;
	}
	if (!loading && data && data.movie) {
		return <h1>{data.movie.title}</h1>;
	}
};

export default Detail;
