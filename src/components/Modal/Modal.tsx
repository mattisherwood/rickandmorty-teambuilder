import { CharacterType } from "@/types"
import classes from "./Modal.module.css"

type Props = {
  children: React.ReactNode
  setSelectedCharacters: (selectedCharacters: CharacterType[]) => void
}

export const Modal = ({ children, setSelectedCharacters }: Props) => {
  return (
    <div
      className={classes.overlay}
      onClick={() => {
        setSelectedCharacters([])
      }}
    >
      <div className={classes.modal} onClick={(e) => e.stopPropagation()}>
        <button
          className={classes.close}
          onClick={() => {
            setSelectedCharacters([])
          }}
        >
          X
        </button>
        {children}
      </div>
    </div>
  )
}
