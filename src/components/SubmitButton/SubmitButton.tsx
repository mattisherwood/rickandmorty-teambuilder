import { CharacterType } from "@/types"
import { Container } from "../Container/Container"
import classes from "./SubmitButton.module.css"

type Props = {
  filteredCharacters: CharacterType[]
  setSelectedCharacters: (selectedCharacters: CharacterType[]) => void
}

const randomlyPickSix = (characters: CharacterType[]) => {
  const shuffledCharacters = characters.sort(() => 0.5 - Math.random())
  return shuffledCharacters.slice(0, 6)
}

export const SubmitButton = ({
  filteredCharacters,
  setSelectedCharacters,
}: Props) => (
  <div className={classes.root}>
    <Container>
      <button
        className={classes.button}
        onClick={() =>
          setSelectedCharacters(randomlyPickSix(filteredCharacters))
        }
      >
        Generate Random Team from selection
      </button>
    </Container>
  </div>
)
