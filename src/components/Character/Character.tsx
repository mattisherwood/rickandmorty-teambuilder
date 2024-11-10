import { CharacterType } from "@/types"
import clsx from "clsx"
import { Avatar } from "../Avatar/Avatar"
import classes from "./Character.module.css"

type Props = {
  character?: CharacterType
  isActive?: boolean
  onClick?: () => void
}

export const Character = ({ character, isActive, onClick }: Props) => {
  if (!character) return <SkeletonCharacter />

  const { gender, image, name, species, status } = character

  return (
    <div
      className={clsx(classes.root, onClick && classes.clickable)}
      onClick={onClick}
    >
      <Avatar
        className={classes.avatar}
        image={image}
        isActive={isActive}
        name={name}
        size={60}
      />
      <div className={classes.details}>
        <h2 className={classes.name}>{name}</h2>
        <p className={classes.subtitle}>
          {species} - {gender} {status === "Dead" && "💀"}
        </p>
      </div>
    </div>
  )
}

const SkeletonCharacter = () => (
  <div className={clsx(classes.root, classes.skeleton)}>
    <div className={classes.avatar} />
    <div className={classes.details}>
      <h2 className={classes.name}> </h2>
      <p className={classes.subtitle}> </p>
    </div>
  </div>
)
