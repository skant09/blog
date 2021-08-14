const Notes = (): JSX.Element => {
  return (
    <div>
      <h1>Notes</h1>

      <div className="grid">
        <a href="/notes-nextjs" className="card">
          <h3>NextJS &rarr;</h3>
          <p>Various learning with NextJS</p>
        </a>

        <a href="/notes-interview-Question" className="card">
          <h3>Interview Questions &rarr;</h3>
          <p>Interview Question, mostly the one which I messed up</p>
        </a>
      </div>
    </div>
  )
}
export default Notes
