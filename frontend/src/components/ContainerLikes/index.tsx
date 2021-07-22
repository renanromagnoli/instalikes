import { CardLikes } from '../CardLikes'
import styles from './styles.module.scss'

/*type ContainerLikesProps = {
    id={props.mainProfile.friends.id} 
    img={props.mainProfile.friends.img}
    name={props.mainProfile.friends.name}
    likes={props.mainProfile.friends.likes}
    comments={props.mainProfile.friends.comments}
}*/

export function ContainerLikes(props) {
    return (
        <div className={styles.likesContainer}>
            <h1>Top 5 Likes</h1>
            <div className={styles.cardsLikes}>
                <CardLikes 
                    position={props.position}
                    img={props.img}
                    name={props.name}
                    user={props.user}
                    likes={props.likes}
                />
                <CardLikes 
                    position={props.position}
                    img={props.img}
                    name={props.name}
                    user={props.user}
                    likes={props.likes}
                />
                <CardLikes 
                    position={props.position}
                    img={props.img}
                    name={props.name}
                    user={props.user}
                    likes={props.likes}
                />
                <CardLikes 
                    position={props.position}
                    img={props.img}
                    name={props.name}
                    user={props.user}
                    likes={props.likes}
                />
                <CardLikes 
                    position={props.position}
                    img={props.img}
                    name={props.name}
                    user={props.user}
                    likes={props.likes}
                />
            </div>
        </div>
    )
}