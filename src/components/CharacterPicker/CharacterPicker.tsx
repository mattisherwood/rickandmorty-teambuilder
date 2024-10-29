"use client"

import { CharacterType } from "@/types"
import { useEffect, useState } from "react"
import { CharacterTable } from "../CharacterTable/CharacterTable"
import { Container } from "../Container"
import { Filters } from "../Filters/Filters"
import { Modal } from "../Modal/Modal"
import { Search } from "../Search/Search"
import { SubmitButton } from "../SubmitButton/SubmitButton"

export default function CharacterPicker() {
  // Current character list
  const [characters, setCharacters] = useState<CharacterType[]>([])
  const [filteredCharacters, setFilteredCharacters] = useState<CharacterType[]>(
    []
  )

  // Current filters
  const [search, setSearch] = useState("")
  const [genderFilter, setGenderFilter] = useState("")
  const [speciesFilter, setSpeciesFilter] = useState("")
  const [statusFilter, setStatusFilter] = useState("")

  // Current team selection
  const [selectedCharacters, setSelectedCharacters] = useState<CharacterType[]>(
    []
  )

  useEffect(() => {
    fetch("/api/characters")
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results)
        setFilteredCharacters(data.results)
      })
  }, [])

  useEffect(() => {
    const filtered = characters
      .filter((character) =>
        character.name.toLowerCase().includes(search.toLowerCase())
      )
      .filter(({ gender }) => gender === genderFilter || genderFilter === "")
      .filter(
        ({ species }) => species === speciesFilter || speciesFilter === ""
      )
      .filter(({ status }) => status === statusFilter || statusFilter === "")

    setFilteredCharacters(filtered)
  }, [characters, genderFilter, search, speciesFilter, statusFilter])

  return (
    <>
      <Container>
        <Search search={search} setSearch={setSearch} />
        <Filters
          genderFilter={genderFilter}
          setGenderFilter={setGenderFilter}
          speciesFilter={speciesFilter}
          setSpeciesFilter={setSpeciesFilter}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
        />
        <CharacterTable characters={filteredCharacters} />
      </Container>
      <SubmitButton
        filteredCharacters={filteredCharacters}
        setSelectedCharacters={setSelectedCharacters}
      />
      {
        // if there are selected Characters, display a modal with their names listed
        selectedCharacters.length > 0 && (
          <Modal setSelectedCharacters={setSelectedCharacters}>
            <>
              <h2>Your Crack Team</h2>
              <CharacterTable characters={selectedCharacters} />
            </>
          </Modal>
        )
      }
    </>
  )
}
