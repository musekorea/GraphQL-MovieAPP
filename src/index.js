import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
	<ApolloProvider client={client}>
		<App></App>
	</ApolloProvider>
);
