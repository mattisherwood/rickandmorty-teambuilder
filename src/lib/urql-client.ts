import { cacheExchange, createClient, fetchExchange } from "urql"

const client = createClient({
  url: "https://rickandmortyapi.com/graphql",
  exchanges: [cacheExchange, fetchExchange],
})

export default client
