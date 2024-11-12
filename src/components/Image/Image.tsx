import clsx from "clsx"
import NextImage from "next/image"
import classes from "./Image.module.css"

type Props = {
  className?: string
  src: string
  alt: string
  width: number
  height: number
}

export const Image = (props: Props) => {
  return (
    <NextImage
      onLoad={(image) => {
        image.currentTarget.classList.remove(classes.loading)
      }}
      {...props}
      className={clsx(props.className, classes.root, classes.loading)}
    />
  )
}
