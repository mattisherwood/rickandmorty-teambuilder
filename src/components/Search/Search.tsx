import classes from "./Search.module.css"

type Props = {
  characterCount: number
  search: string
  setSearch: (search: string) => void
}

export const Search = ({ characterCount, search, setSearch }: Props) => (
  <div className={classes.root}>
    <input
      type='text'
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder={`Search within ${characterCount} characters`}
      className={classes.input}
    />
    <button
      aria-label='clear'
      className={classes.clear}
      onClick={() => setSearch("")}
    >
      X
    </button>
  </div>
)
