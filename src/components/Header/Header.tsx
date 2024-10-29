import { Container } from "../Container/Container"
import classes from "./Header.module.css"

export const Header = () => (
  <header className={classes.root}>
    <Container>
      <h1 className={classes.title}>Pick your team</h1>
    </Container>
  </header>
)
