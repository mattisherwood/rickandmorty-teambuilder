import clsx from "clsx"
import { ReactNode } from "react"
import classes from "./Container.module.css"

type Props = {
  children: ReactNode
  className?: string
}

export const Container = ({ children, className }: Props) => (
  <div className={clsx(classes.container, className)}>{children}</div>
)
