import clsx from "clsx"
import classes from "./Button.module.css"

type Props = {
  fullWidth?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ children, className, fullWidth, ...rest }: Props) => (
  <button
    className={clsx(classes.button, fullWidth && classes.fullWidth, className)}
    {...rest}
  >
    {children}
  </button>
)
