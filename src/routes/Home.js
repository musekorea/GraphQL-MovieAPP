import { gql, useQuery } from "@apollo/client";

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
	if (data) {
		return (
			<div>
				{data.movies.map((movie) => (
					<img src={movie.medium_cover_image} key={movie.id} />
				))}
			</div>
		);
	}
};

export default Home;
