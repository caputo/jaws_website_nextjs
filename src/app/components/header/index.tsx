import styles from './header.module.css';
 
export default function Header(){
    return (
        <header className={styles.container}>
            <nav className={styles.navList}>
                <ul>
                    <li>
                        <a>Home</a>
                    </li>
                    <li>
                        <a>Contact</a>
                    </li>
                    <li>
                        <a>About</a>
                    </li>
                </ul>
                
                
                
            </nav>
            <h1 className={styles.title}>Jaws Tech Desenvolvimento de Software</h1>
        </header>
    )
}