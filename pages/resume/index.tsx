import style from './resume.module.css'

const Resume = (): JSX.Element => {
  return (
    <section>
      <h1>Resume</h1>
      <div className={style.resume}>
        <header className={style.header}>
          <div className={style.left}>
            <h2>Suryakant</h2>
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

        <div className={style.resume_body}>
          <section>
            <h2>Education</h2>
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
            <h2>Experience</h2>
            <details>
              <summary>
                <em>
                  Technology Lead Frontend@<a href="www.zivame.com">Zivame</a>
                </em>
                (Jan 2020 - present)
              </summary>
            </details>

            <details>
              <summary>
                <em>
                  Senior web developer@<a href="www.amazon.in">Amazon</a>
                </em>
                (March 2019 - Dec 2019)
              </summary>
            </details>

            <details>
              <summary>
                <em>
                  Technical Product Manager@
                  <a href="https://www.syook.com/about-us">Syook</a>
                </em>
                (May 2018 - March 2019)
              </summary>
            </details>

            <details>
              <summary>
                <em>
                  Senior software develoepr@
                  <a href="https://www.jifflenow.com/">Jifflenow</a>{' '}
                </em>
                (April 2017 - April 2018)
              </summary>
            </details>

            <details>
              <summary>
                <em>
                  Senior software develoepr@<a href="www.zivame.com">Zivame</a>
                </em>
                (Sept 2016 - April 2017)
              </summary>
            </details>

            <details>
              <summary>
                <em>
                  Software Consultant@
                  <a href="https://www.nineleaps.com/">Nineleaps</a>
                </em>
                (Apr 2014 - Sept 2016)
              </summary>
            </details>
          </section>

          <section>
            <h2>Computer Skill</h2>

            <details>
              <summary>
                <em>JavaScript</em>
              </summary>
            </details>

            <details>
              <summary>
                <em>HTML</em>
              </summary>
            </details>

            <details>
              <summary>
                <em>CSS</em>
              </summary>
            </details>

            <details>
              <summary>
                <em>Python</em>
              </summary>
            </details>
          </section>

          <section>
            <h2>Publications</h2>
          </section>
        </div>
      </div>
    </section>
  )
}
export default Resume
