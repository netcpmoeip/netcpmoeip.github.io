import styles from '../styles/Home.module.css'


export default function Form() {
    return (
        <div id="form">
            <form id="mail_form">
                <div className={styles.row}>
                    <label>Кому:</label>
                    <p>team@inveniemus.team</p>
                </div>
                <div className={styles.row}>
                    <label htmlFor="emailFrom">От:</label>
                    <div className={styles.mail_wrapper}>
                        <input type="email" className={styles.form_control} id="emailFrom" />
                        <p className={styles.text_muted}>адрес электронной почты для ответа</p>
                    </div>
                </div>
                <div className={styles.row}>
                    <textarea className={styles.form_control} id="body" rows={15}></textarea>
                </div>
                <a className={styles.button}>Отправить</a>
            </form>
        </div>
    );
}