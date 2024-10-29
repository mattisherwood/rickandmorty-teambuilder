import CharacterPicker from "@/components/CharacterPicker/CharacterPicker"
import classes from "./page.module.css"

export default function Home() {
  return (
    <div className={classes.root}>
      <CharacterPicker />
    </div>
  )
}
