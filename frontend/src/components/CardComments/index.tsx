import styles from './styles.module.scss'

export function CardComments(props) {

    return(
        <div className={styles.profileFriendCard}>
            <span className={styles.profilePosition}>{(props.position || 0)}</span>
            <img src="./renan_perfil.jpg" alt="Profile Image" className={styles.profileImage}/>
            <span className={styles.profileName}>Renan Romagnoli</span>
            <span className={styles.profileUser}>renan.romagnoli</span>
            <div className={styles.counterArea}>
                <span className={styles.counter}>678</span>
                <img src='./comment.svg' className={styles.iconProfileLike} />
            </div>
        </div>
    )
}