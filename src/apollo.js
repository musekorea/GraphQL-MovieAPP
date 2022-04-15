import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
	uri: "http://127.0.0.1:4000/graphql",
	cache: new InMemoryCache({}),
	resolvers: {
		Movie: {
			iskept: () => false,
		},
	},
});

export default client;
