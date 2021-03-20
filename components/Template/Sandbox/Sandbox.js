import styles from './Sandbox.module.scss'
import Container from '@components/Template/Container/Container'

export default function Sandbox({ 
	children, 
}) {
  return (
    <section  className={styles.sandbox}>
      
      <Container>
        <div  className={styles.content}>
          <p className={styles.title}>Component Sandbox</p>
          <div className={styles.inner}>
            {children}
          </div>
        </div>
      </Container>
     
    </section>
  )
}
