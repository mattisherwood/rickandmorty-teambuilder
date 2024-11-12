import { ChangeEvent } from "react"
import classes from "./Filter.module.css"

type Props = {
  ariaLabel: string
  label: string
  options: string[]
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void
  selected: string
}

export const Filter = ({
  ariaLabel,
  label,
  options,
  onChange,
  selected,
}: Props) => (
  <select
    aria-label={ariaLabel}
    onChange={onChange}
    className={classes.root}
    value={selected}
  >
    <option value=''>{label}</option>
    {options.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </select>
)
