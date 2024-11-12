export type CharacterData = {
  info: {
    count: number
    pages: number
  }
  results: CharacterType[]
}

export type CharacterType = {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: {
    name: string
  }
  location: {
    name: string
  }
  image: string
}
