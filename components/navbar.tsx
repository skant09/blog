import style from './navbar.module.css'

const Navbar = (): JSX.Element => {
  return (
    <header>
      <nav className={style.nav}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
        </ul>
        <ul className="right">
          <li>
            <a href="/notes">Notes</a>
          </li>
          <li>
            <a href="/resume">Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Navbar
