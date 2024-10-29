import { ChangeEvent } from "react"
import classes from "./Filter.module.css"

type Props = {
  label: string
  options: string[]
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void
  selected: string
}

export const Filter = ({ label, options, onChange, selected }: Props) => (
  <select onChange={onChange} className={classes.root} value={selected}>
    <option value=''>{label}</option>
    {options.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </select>
)
