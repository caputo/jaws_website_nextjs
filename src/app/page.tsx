import Image from 'next/image'
import styles from './page.module.css'
import Header from './components/header'
import BgVideo from './components/bgVideo'
import HomePage from './components/homePage'
import ContactForm from './components/contact'


export default function Home() {
  return (
    <>
      <head>
        <title>Jaws Tech Desenvolvimento de Software</title>
      </head>
      <main className={styles.main}>        
          <BgVideo />
          <Header/>
          <HomePage />
          <ContactForm />        
      </main>
    </>
  )
}
