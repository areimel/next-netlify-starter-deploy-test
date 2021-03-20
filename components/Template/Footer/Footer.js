import styles from './Footer.module.scss'

export default function Footer({ footerMessage }) {
  return (
    <>
      <footer className={styles.footer}>
       <p className="footer_message computerfont">{footerMessage}</p>
      </footer>
    </>
  )
}
