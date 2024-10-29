import { Filter } from "../Filter/Filter"
import classes from "./Filters.module.css"

type Props = {
  genderFilter: string
  speciesFilter: string
  statusFilter: string
  setGenderFilter: (genderFilter: string) => void
  setSpeciesFilter: (speciesFilter: string) => void
  setStatusFilter: (statusFilter: string) => void
}
export const Filters = ({
  genderFilter,
  setGenderFilter,
  speciesFilter,
  setSpeciesFilter,
  statusFilter,
  setStatusFilter,
}: Props) => (
  <div className={classes.root}>
    <Filter
      onChange={(e) => setSpeciesFilter(e.target.value)}
      label='All Species'
      options={["Human", "Alien"]}
      selected={speciesFilter}
    />
    <Filter
      onChange={(e) => setGenderFilter(e.target.value)}
      label='All Genders'
      options={["Male", "Female", "unknown"]}
      selected={genderFilter}
    />
    <Filter
      onChange={(e) => setStatusFilter(e.target.value)}
      label='Dead or Alive'
      options={["Dead", "Alive", "unknown"]}
      selected={statusFilter}
    />
  </div>
)
