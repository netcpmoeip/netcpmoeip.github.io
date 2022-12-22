import styles from '../styles/Home.module.css'

export default function Feedback(props: any) {
    return (
        <div key={props.id} className={`${styles.card} ${props.type}`}>
            <div className={styles.image_wrapper}>
                <p>{props.excerpt}</p>
            </div>
            <div className={styles.title}>{props.title}</div>
        </div>
    );
}