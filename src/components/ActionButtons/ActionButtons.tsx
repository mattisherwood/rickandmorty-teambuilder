import { CharacterType } from "@/types"
import clsx from "clsx"
import { Avatar } from "../Avatar/Avatar"
import { Button } from "../Button/Button"
import { Container } from "../Container/Container"
import classes from "./ActionButtons.module.css"

type Props = {
  filteredCharacters: CharacterType[]
  isLoading: boolean
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
  isLoading,
  selectedCharacters,
  setSelectedCharacters,
  setIsModalOpen,
}: Props) => (
  <div className={classes.root}>
    <Container className={classes.container}>
      <Button
        aria-label='Clear team'
        disabled={selectedCharacters.length === 0}
        onClick={() => {
          setSelectedCharacters([])
        }}
      >
        ❎
      </Button>
      {selectedCharacters.length === 0 ? (
        <Button
          className={clsx(classes.teamButton, classes.placeholder)}
          disabled
        >
          {isLoading ? "Loading..." : "Select your team"}
        </Button>
      ) : (
        <Button
          aria-label='View team'
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
      )}
      <Button
        aria-label='Random team'
        onClick={() => {
          setSelectedCharacters(randomlyPickSix(filteredCharacters))
        }}
      >
        🔀
      </Button>
    </Container>
  </div>
)
