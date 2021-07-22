import '../styles/globals.scss'
import styles from '../styles/app.module.scss'
import { Header } from '../components/Header'




function MyApp({ Component, pageProps }) {
  return (
  <div className={styles.appContainer}>
    <main>
      <Header/>
      <Component {...pageProps} /> 
    </main>
  </div>
  )}

export default MyApp
