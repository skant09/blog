const changeTheme = (e) => {
  switch (e.target.value) {
    case 'dark':
      window.document.body.classList.remove('solarised-dark', 'light')
      window.document.body.classList.add('dark')
      return
    case 'solarised-dark':
      window.document.body.classList.remove('dark', 'light')
      window.document.body.classList.add('solarised-dark')
      return
    case 'light':
      window.document.body.classList.remove('dark', 'solarised-dark')
      window.document.body.classList.add('light')
      return
    default:
      return
  }
}
const Navbar = (): JSX.Element => (
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
          <select name="theme" id="theme" onChange={changeTheme}>
            <option value="solarised-dark">
              <span>{`Solarised ◐︁`}</span>
            </option>
            <option value="dark">
              <span>{`Dark ⏾︁`}</span>
            </option>
            <option value="light">
              <span>{`Light ☀︁`}</span>
            </option>
          </select>
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
      select,
      option {
        vertical-align: initial;
        font-weight: 600;
        text-align-last: right;
      }
      option {
        direction: rtl;
      }
    `}</style>
  </header>
)
export default Navbar
