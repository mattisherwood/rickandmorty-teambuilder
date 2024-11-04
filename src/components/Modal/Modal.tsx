import classes from "./Modal.module.css"

type Props = {
  children: React.ReactNode
  setIsModalOpen: (isModalOpen: boolean) => void
}

export const Modal = ({ children, setIsModalOpen }: Props) => {
  return (
    <div
      className={classes.overlay}
      onClick={() => {
        setIsModalOpen(false)
      }}
    >
      <div className={classes.modal} onClick={(e) => e.stopPropagation()}>
        <button
          className={classes.close}
          onClick={() => {
            setIsModalOpen(false)
          }}
        >
          X
        </button>
        {children}
      </div>
    </div>
  )
}
