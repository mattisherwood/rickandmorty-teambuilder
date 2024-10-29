import Image from "next/image"
import classes from "./Character.module.css"

type Props = {
  name: string
  species: string
  gender: string
  image: string
  status: string
}

export const Character = ({ name, species, gender, image, status }: Props) => (
  <div className={classes.root}>
    <Image
      className={classes.image}
      src={image}
      alt={name}
      width={60}
      height={60}
    />
    <div className={classes.details}>
      <h2 className={classes.name}>{name}</h2>
      <p className={classes.subtitle}>
        {species} - {gender} {status === "Dead" && "💀"}
      </p>
    </div>
  </div>
)
