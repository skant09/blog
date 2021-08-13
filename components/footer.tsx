const Footer = (): JSX.Element => {
  return (
    <footer>
      <strong>© Copyright 2021 Suryakant</strong>
      <style jsx>{`
        footer {
          width: 100%;
          border-top: 1px solid var(--border-color);
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </footer>
  )
}
export default Footer
