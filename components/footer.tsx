const Footer = (): JSX.Element => {
  return (
    <footer>
      <strong>© Copyright 2021 Suryakant</strong>
      <style jsx>{`
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </footer>
  )
}
export default Footer
