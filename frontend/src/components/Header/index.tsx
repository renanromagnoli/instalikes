import styles from './styles.module.scss'

export function Header() {
    return(
        <header className={styles.cabecalho}>
            <p>
                insta<span>Likes</span>
            </p>
            <div>
                <span>@ </span>
                <input type="text" placeholder="Profile Name..." spellCheck='false' id='inputSearch'/>
                <img src="./down.svg" alt="Download profile info!" id={styles.button}/>
            </div>
        </header>
    )
}