import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import Question9 from "../helper/Question9";
const link = new HttpLink({
  uri: 'https://star-wars-graphql-dont-change.p.rapidapi.com/',
  headers: {
    'x-rapidapi-key': 'fb4949d181msh5811e5de8612b1cp1784eajsn952f3f136d1c',
    'x-rapidapi-host': 'star-wars-graphql-dont-change.p.rapidapi.com',
    'Content-Type': 'application/json'
  },
});

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});
const ApolloProvider2 = () => {
  return (
    <>
      <ApolloProvider client={client}>
        <Question9 />
      </ApolloProvider>
    </>
  );
};

export default ApolloProvider2;
