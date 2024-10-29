import { cacheExchange, createClient, debugExchange, fetchExchange } from "urql"

const client = createClient({
  url: "https://rickandmortyapi.com/graphql",
  exchanges: [cacheExchange, debugExchange, fetchExchange],
})

export default client
