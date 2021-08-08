import style from './resume.module.css'

const Resume = (): JSX.Element => {
  return (
    <section>
      <h1>Resume</h1>
      <div className={style.resume}>
        <header className={style.header}>
          <div className={style.left}>
            <strong>Suryakant</strong>
            <span>Tech Lead </span>
            <span>Frontend@Zivame</span>
          </div>
          <div className={style.right}>
            <span>Bangalore-India</span>
            <span>+91 906 669 0043</span>
            <span>s.kant@outlook.com</span>
            <span>Github- skant09</span>
          </div>
        </header>

        <div className={style.body}>
          <section>
            <strong>Education</strong>
            <details>
              <summary>
                <em>Dual Degree, IIT Madras </em>(2004-2009)
              </summary>
              <p>
                I studied Mechanical Engineering with specialisation in Energy
                technology.
              </p>
            </details>
            <details>
              <summary>
                <em>Senior Secondary DAV JVM Shyamali Ranchi</em>(2001-2003)
              </summary>
              <p>
                I studied Physics, Chemistry, Mathematics and Engineering
                Drawing.
              </p>
            </details>
            <details>
              <summary>
                <em>Secondary DAV Kapildev, Ranchi</em>(2001)
              </summary>
            </details>
          </section>

          <section>
            <strong>Experience</strong>
            <details>
              <summary>
                <em>Technology Lead Frontend@Zivame </em>(Jan 2020 - present)
              </summary>
            </details>
            <details></details>
          </section>

          <section>
            <strong>Computer Skill</strong>
          </section>

          <section>
            <strong>Publications</strong>
          </section>
        </div>
      </div>
    </section>
  )
}
export default Resume
