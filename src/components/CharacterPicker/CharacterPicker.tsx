"use client"

import { CharacterData, CharacterType } from "@/types"
import { useEffect, useState } from "react"
import { ActionButtons } from "../ActionButtons/ActionButtons"
import { CharacterTable } from "../CharacterTable/CharacterTable"
import { Container } from "../Container/Container"
import { Filters } from "../Filters/Filters"
import { Modal } from "../Modal/Modal"
import { Search } from "../Search/Search"

export default function CharacterPicker() {
  // Current character list
  const [characterData, setCharacterData] = useState<CharacterData>({
    info: { count: 0, pages: 0 },
    results: [],
  })
  const [page, setPage] = useState(1)
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
  const [isLoading, setIsLoading] = useState<boolean>(true)

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const queryString = [
      `page=${page}`,
      search && `name=${search}`,
      genderFilter && `gender=${genderFilter}`,
      speciesFilter && `species=${speciesFilter}`,
      statusFilter && `status=${statusFilter}`,
    ]
      .filter((query) => query)
      .join("&")
    fetch(`/api/characters?${queryString}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacterData(data)
      })
  }, [page, genderFilter, search, speciesFilter, statusFilter])

  useEffect(() => {
    const filtered = characterData.results
      .filter((character) =>
        character.name.toLowerCase().includes(search.toLowerCase())
      )
      .filter(({ gender }) => gender === genderFilter || genderFilter === "")
      .filter(
        ({ species }) => species === speciesFilter || speciesFilter === ""
      )
      .filter(({ status }) => status === statusFilter || statusFilter === "")

    setFilteredCharacters(filtered)
    if (filtered.length) setIsLoading(false)
  }, [characterData, genderFilter, search, speciesFilter, statusFilter])

  return (
    <>
      <Container>
        <Search
          search={search}
          setSearch={setSearch}
          characterCount={characterData.info.count}
        />
        <Filters
          characterData={characterData}
          genderFilter={genderFilter}
          page={page}
          speciesFilter={speciesFilter}
          statusFilter={statusFilter}
          setGenderFilter={setGenderFilter}
          setPage={setPage}
          setSpeciesFilter={setSpeciesFilter}
          setStatusFilter={setStatusFilter}
        />
        <CharacterTable
          characters={filteredCharacters}
          isLoading={isLoading}
          selectedCharacters={selectedCharacters}
          setSelectedCharacters={setSelectedCharacters}
        />
      </Container>
      <ActionButtons
        selectedCharacters={selectedCharacters}
        isLoading={isLoading}
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
