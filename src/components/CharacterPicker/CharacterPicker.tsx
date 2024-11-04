"use client"

import { CharacterType } from "@/types"
import { useEffect, useState } from "react"
import { ActionButtons } from "../ActionButtons/ActionButtons"
import { CharacterTable } from "../CharacterTable/CharacterTable"
import { Container } from "../Container/Container"
import { Filters } from "../Filters/Filters"
import { Modal } from "../Modal/Modal"
import { Search } from "../Search/Search"

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

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false)

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
        <CharacterTable
          characters={filteredCharacters}
          selectedCharacters={selectedCharacters}
          setSelectedCharacters={setSelectedCharacters}
        />
      </Container>
      <ActionButtons
        selectedCharacters={selectedCharacters}
        filteredCharacters={filteredCharacters}
        setSelectedCharacters={setSelectedCharacters}
        setIsModalOpen={setIsModalOpen}
      />
      {
        // if there are selected Characters, display a modal with their names listed
        isModalOpen && (
          <Modal setIsModalOpen={setIsModalOpen}>
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
