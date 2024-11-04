import { CharacterType } from "@/types"
import { Character } from "../Character/Character"

type Props = {
  characters: CharacterType[]
  selectedCharacters?: CharacterType[]
  setSelectedCharacters?: (characters: CharacterType[]) => void
}

export const CharacterTable = ({
  characters,
  selectedCharacters,
  setSelectedCharacters,
}: Props) => (
  <div>
    {characters.map((character) => {
      const { id, name, image, species, gender, status } = character
      const isActive =
        selectedCharacters &&
        selectedCharacters.some(
          (selectedCharacter) => selectedCharacter?.id === id
        )
      return (
        <Character
          gender={gender}
          image={image}
          isActive={isActive}
          key={id}
          name={name}
          onClick={
            setSelectedCharacters != undefined &&
            selectedCharacters != undefined
              ? () => {
                  setSelectedCharacters(
                    isActive
                      ? selectedCharacters.filter(
                          (character) => character?.id !== id
                        )
                      : [...selectedCharacters, character]
                  )
                }
              : undefined
          }
          species={species}
          status={status}
        />
      )
    })}
  </div>
)
