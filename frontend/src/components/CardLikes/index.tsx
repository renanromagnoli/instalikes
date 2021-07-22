import styles from './styles.module.scss'

type CardLikesProps = {
    position: number,
    img: string,
    name: string,
    user: string,
    likes: number
}

export function CardLikes(props: CardLikesProps) {

    return(
        <div className={styles.profileFriendCard}>
            <span className={styles.profilePosition}>{(props.position || 0)}</span>
            <img src={props.img} alt="Profile Image" className={styles.profileImage}/>
            <span className={styles.profileName}>{props.name}</span>
            <span className={styles.profileUser}>{props.user}</span>
            <div className={styles.counterArea}>
                <span className={styles.counter}>{props.likes}</span>
                <img src='./like.svg' className={styles.iconProfileLike} />
            </div>
        </div>
    )
}