import { CharacterData } from "@/types"
import { Button } from "../Button/Button"
import { Filter } from "../Filter/Filter"
import classes from "./Filters.module.css"

type Props = {
  characterData: CharacterData
  genderFilter: string
  page: number
  speciesFilter: string
  statusFilter: string
  setGenderFilter: (genderFilter: string) => void
  setPage: (page: number) => void
  setSpeciesFilter: (speciesFilter: string) => void
  setStatusFilter: (statusFilter: string) => void
}
export const Filters = ({
  characterData,
  genderFilter,
  page,
  speciesFilter,
  statusFilter,
  setGenderFilter,
  setPage,
  setSpeciesFilter,
  setStatusFilter,
}: Props) => (
  <div className={classes.root}>
    <Filter
      ariaLabel='Filter by Species'
      onChange={(e) => setSpeciesFilter(e.target.value)}
      label='All Species'
      options={["Human", "Alien"]}
      selected={speciesFilter}
    />
    <Filter
      ariaLabel='Filter by Genders'
      onChange={(e) => setGenderFilter(e.target.value)}
      label='All Genders'
      options={["Male", "Female", "unknown"]}
      selected={genderFilter}
    />
    <Filter
      ariaLabel='Filter by Status'
      onChange={(e) => setStatusFilter(e.target.value)}
      label='Dead or Alive'
      options={["Dead", "Alive", "unknown"]}
      selected={statusFilter}
    />
    <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
      Previous
    </Button>
    <Button
      onClick={() => setPage(page + 1)}
      disabled={page === characterData.info.pages}
    >
      Next
    </Button>
  </div>
)
