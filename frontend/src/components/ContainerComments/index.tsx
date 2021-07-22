
import { CardComments } from '../CardComments'
import styles from './styles.module.scss'


export function ContainerComments() {
    return (
        <div className={styles.commentsContainer}>
            <h1>Top 5 Comments</h1>
            <div className={styles.cardsComments}>
                <CardComments/>           
                <CardComments/>           
                <CardComments/>           
                <CardComments/>           
                <CardComments/>           
            </div>
        </div>
    )
}