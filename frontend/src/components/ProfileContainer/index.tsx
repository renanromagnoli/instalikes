import styles from './styles.module.scss'
import Image from 'next/image'


export function ContainerProfileMain(props){
    return(
        <div className={styles.profileMain}>
            <div className={styles.profileMainImageAndName}>
                <img src={props.img} alt="" />
                <span id={styles.profileMainName}>{props.id}</span>
            </div>
            <div className={styles.profileMainTotalData}>
                <div className={styles.likesContainer}>
                    <h1 id={styles.numberLikesContainer}>{props.likes}</h1>
                    <img src="/like.svg" alt="Likes" id={styles.iconLikesContainer}/>
                </div>
                <div>
                    <h1>{props.comments}</h1>
                    <img src="/comment.svg" alt="Comments" id="commentContainer"/>
                </div>
            </div>
        </div>
    )
}

