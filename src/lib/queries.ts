import { gql } from "urql"

export const GET_CHARACTERS = gql`
  query GetCharacters {
    characters {
      info {
        count
      }
      results {
        id
        name
        status
        species
        type
        gender
        origin {
          name
        }
        location {
          name
        }
        image
      }
    }
  }
`
