import { CharacterType } from "@/types"
import { Character } from "../Character/Character"

type Props = {
  characters: CharacterType[]
  isLoading?: boolean
  selectedCharacters?: CharacterType[]
  setSelectedCharacters?: (characters: CharacterType[]) => void
}

export const CharacterTable = ({
  characters,
  isLoading,
  selectedCharacters,
  setSelectedCharacters,
}: Props) =>
  isLoading ? (
    <>
      {Array.from({ length: 10 }).map((_, i) => (
        <Character key={i} />
      ))}
    </>
  ) : (
    <>
      {characters.map((character) => {
        const isActive =
          selectedCharacters &&
          selectedCharacters.some(
            (selectedCharacter) => selectedCharacter?.id === character.id
          )
        return (
          <Character
            character={character}
            isActive={isActive}
            key={character.id}
            onClick={
              setSelectedCharacters != undefined &&
              selectedCharacters != undefined
                ? () => {
                    setSelectedCharacters(
                      isActive
                        ? selectedCharacters.filter(
                            ({ id }) => id !== character.id
                          )
                        : [...selectedCharacters, character]
                    )
                  }
                : undefined
            }
          />
        )
      })}
    </>
  )
