import clsx from "clsx"
import Image from "next/image"
import classes from "./Avatar.module.css"

type Props = {
  className?: string
  image: string
  isActive?: boolean
  name: string
  size: number
}

export const Avatar = ({ className, image, isActive, name, size }: Props) => (
  <div className={clsx(classes.root, isActive && classes.active)}>
    <Image
      className={clsx(classes.image, className)}
      src={image}
      alt={name}
      width={size}
      height={size}
    />
  </div>
)
