import { CharacterType } from "@/types"
import { Avatar } from "../Avatar/Avatar"
import { Button } from "../Button/Button"
import { Container } from "../Container/Container"
import classes from "./ActionButtons.module.css"

type Props = {
  filteredCharacters: CharacterType[]
  selectedCharacters: CharacterType[]
  setSelectedCharacters: (characters: CharacterType[]) => void
  setIsModalOpen: (isModalOpen: boolean) => void
}

const randomlyPickSix = (characters: CharacterType[]) => {
  const shuffledCharacters = characters.slice().sort(() => 0.5 - Math.random())
  return shuffledCharacters.slice(0, 6)
}

export const ActionButtons = ({
  filteredCharacters,
  selectedCharacters,
  setSelectedCharacters,
  setIsModalOpen,
}: Props) => (
  <div className={classes.root}>
    <Container className={classes.container}>
      <Button
        onClick={() => {
          setSelectedCharacters([])
        }}
      >
        ❎
      </Button>
      <Button
        className={classes.teamButton}
        onClick={() => setIsModalOpen(true)}
        fullWidth
      >
        {selectedCharacters.map(({ id, image, name }) => (
          <Avatar image={image} key={id} name={name} size={20} />
        ))}
        {Array.from({ length: 6 - selectedCharacters.length }).map((_, i) => (
          <div className={classes.circle} key={i} />
        ))}
      </Button>
      <Button
        onClick={() => {
          setSelectedCharacters(randomlyPickSix(filteredCharacters))
        }}
      >
        🔀
      </Button>
    </Container>
  </div>
)
