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
            <a
              href="mailto:s.kant@outlook.com"
              rel="noopener noreferrer"
              target="blank"
            >
              s.kant@outlook.com
            </a>
            <a
              href="https://github.com/skant09"
              rel="noopener noreferrer"
              target="blank"
            >
              <i className="ri-github-line"></i> skant09
            </a>
            <a
              href="https://www.linkedin.com/in/surya-kant-7b38033b/"
              rel="noopener noreferrer"
              target="blank"
              className="ri-linkedin-line"
            >
              surya-kant-7b38033b
            </a>
          </div>
        </header>

        <div className={style.resume_body}>
          <section>
            <h2>Education</h2>
            <details>
              <summary>
                <em>Dual Degree, IIT Madras </em>
                <span className={style.right}>2004-2009</span>
              </summary>
              <p>
                I studied Mechanical Engineering with specialisation in Energy
                technology.
              </p>
            </details>
            <details>
              <summary>
                <em>Senior Secondary DAV JVM Shyamali Ranchi</em>
                <span className={style.right}>2001-2003</span>
              </summary>
              <p>
                I studied Physics, Chemistry, Mathematics and Engineering
                Drawing.
              </p>
            </details>
            <details>
              <summary>
                <em>Secondary DAV Kapildev, Ranchi</em>
                <span className={style.right}>2001</span>
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
                <span className={style.right}>Jan 2020 - present</span>
              </summary>
            </details>

            <details>
              <summary>
                <em>
                  Senior web developer@<a href="www.amazon.in">Amazon</a>
                </em>
                <span className={style.right}>March 2019 - Dec 2019</span>
              </summary>
            </details>

            <details>
              <summary>
                <em>
                  Technical Product Manager@
                  <a href="https://www.syook.com/about-us">Syook</a>
                </em>
                <span className={style.right}>May 2018 - March 2019</span>
              </summary>
            </details>

            <details>
              <summary>
                <em>
                  Senior software develoepr@
                  <a href="https://www.jifflenow.com/">Jifflenow</a>{' '}
                </em>
                <span className={style.right}>April 2017 - April 2018</span>
              </summary>
            </details>

            <details>
              <summary>
                <em>
                  Senior software develoepr@<a href="www.zivame.com">Zivame</a>
                </em>
                <span className={style.right}>Sept 2016 - April 2017</span>
              </summary>
            </details>

            <details>
              <summary>
                <em>
                  Software Consultant@
                  <a href="https://www.nineleaps.com/">Nineleaps</a>
                </em>
                <span className={style.right}>Apr 2014 - Sept 2016</span>
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

          <details>
            <summary>
              <em>
                <a
                  href="https://www.sciencedirect.com/science/article/abs/pii/S001793100800608X"
                  rel="noopener noreferrer"
                  target="blank"
                >
                  A hybrid optimization technique for developing heat transfer
                  correlations based on transient experiments
                </a>
              </em>
              <span className={style.right}>IJHMT - March 2009</span>
            </summary>
            <p>
              A new approach for developing a Nusselt number correlation, in
              terms of relevant non-dimensional parameters, for turbulent forced
              convection flows in vertical channels using a judicious
              combination of transient cooling experiments with a hybrid
              optimization technique is reported. The temperature–time history,
              during the cooling of a heated plate, idealized as a lumped
              capacity heat transfer model, is recorded using a PC based data
              acquisition system. A numerically computed temperature–time
              history of the plate is then compared with the experimentally
              known temperature–time history to estimate the residual. The
              minimization of sum of the squares of the residual is done using a
              hybrid numerical optimization technique, i.e. a combination of
              Genetic Algorithm and the Levenberg–Marquardt method, in order to
              obtain the coefficient and the exponents of the pertinent
              non-dimensional parameters in the Nusselt number correlation. The
              parameters in the correlation are also retrieved using another
              global optimization technique, the Simulated Annealing (SA), for
              evaluating the consistency in parameter estimation. As a
              validation exercise, Nusselt number values estimated using the
              proposed correlation are compared with steady state experimental
              results and a good agreement of results endorses the efficacy of
              this approach.
            </p>
          </details>

          <details>
            <summary>
              <em>
                <a
                  href="https://www.sciencedirect.com/science/article/abs/pii/S0925527315003084"
                  rel="noopener noreferrer"
                  target="blank"
                >
                  Optimization of a platform configuration with generational
                  changes
                </a>
              </em>
              <span className={style.right}>IJPR - November 2015</span>
            </summary>
            <p>
              Platform is an established strategy for producing customized
              products while managing the economy of scale. Innovation in
              various areas makes different components in a platform outdated or
              redundant within a short span of time. This poses severe challenge
              to the robustness of the platform configuration that efficiently
              satisfies the volatile needs of the customers from various
              segments. Therefore, deciding the platform configuration that can
              adequately accommodate generational changes in the product design
              is emerging as a new challenge. This paper deals with optimization
              of a platform configuration through a couple of product
              generations. For this, specifications from different customers and
              their probable attribute changes are mapped to product׳s utility,
              which signifies importance of each component through a period of
              time. Utility by cost ratio for different products forms the basic
              variable for optimizing the configuration of a platform. An
              illustrative example is detailed to demonstrate the methodology
              adopted in exploring the optimal platform configuration. This
              paper incorporates an intelligent DNA-based technique to reach the
              optimal configuration. The results of simulated DNA computation
              are compared with that of genetic algorithm (GA). The results show
              significant improvement in the number of objective function
              evaluations before reaching the optimal result, against that of GA
              thus establishing its superiority in numerical optimization.
            </p>
          </details>
        </div>
      </div>
    </section>
  )
}
export default Resume
