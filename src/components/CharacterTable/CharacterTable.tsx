import { CharacterType } from "@/types"
import { Character } from "../Character/Character"

type Props = {
  characters: CharacterType[]
}

export const CharacterTable = ({ characters }: Props) => {
  return (
    <div>
      {characters.map(({ id, name, image, species, gender, status }) => (
        <Character
          key={id}
          name={name}
          image={image}
          species={species}
          gender={gender}
          status={status}
        />
      ))}
    </div>
  )
}
