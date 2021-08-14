const Navbar = (): JSX.Element => {
  return (
    <header>
      <nav className="nav">
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
          <li>
            <span>
              <i className="ri-moon-fill" />
              Theme
            </span>
          </li>
        </ul>
      </nav>
      <style jsx>{`
        header {
          width: 100%;
          border-bottom: 1px solid var(--border-color);
        }
        .nav {
          display: flex;
          max-width: var(--global-width);
          height: var(--navbar-height);
          justify-content: space-between;
          margin: 0 auto;
        }
        .nav ul {
          margin-block-start: 0rem;
          padding-inline-start: 0rem;
        }
        .nav li {
          list-style: none;
          display: inline-block;
          align-items: center;
          margin: 0px 5px;
          line-height: var(--navbar-height);
        }

        nav a:hover {
          color: var(--dark-grey);
        }

        .nav ul.right {
          justify-content: end;
        }
      `}</style>
    </header>
  )
}
export default Navbar
