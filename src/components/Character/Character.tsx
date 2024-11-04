import clsx from "clsx"
import { Avatar } from "../Avatar/Avatar"
import classes from "./Character.module.css"

type Props = {
  gender: string
  image: string
  isActive?: boolean
  name: string
  onClick?: () => void
  species: string
  status: string
}

export const Character = ({
  gender,
  image,
  isActive,
  name,
  onClick,
  species,
  status,
}: Props) => (
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
