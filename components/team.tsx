import styles from '../styles/Home.module.css'

export default function Team(props: any) {
    return (
        <div key={props.id} className={`${styles.card} ${props.type}`}>
            <div className={styles.image_wrapper}>
                <img src={props.image}/>
            </div>
            <div className={styles.title}>{props.title}</div>
            <p className={styles.sub_title}>{props.excerpt}</p>
        </div>
    );
}