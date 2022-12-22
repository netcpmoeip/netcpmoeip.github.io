import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Misc(props: any) {
    if (props.url) {
        return (
            <Link key={props.id} className={`${styles.card} ${props.type}`} href={props.url}>
                <div className={styles.image_wrapper}>
                    <img src={props.image}/>
                </div>
                <div className={styles.title}>{props.title}</div>
            </Link>
        );
    } else {
        return (
            <div key={props.id} className={`${styles.card} ${props.type}`}>
                <div className={styles.image_wrapper}>
                    <img src={props.image}/>
                </div>
                <div className={styles.title}>{props.title}</div>
            </div>
        );
    }  
}