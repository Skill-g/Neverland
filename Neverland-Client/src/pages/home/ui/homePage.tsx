import { siteName } from "../../../app/consts.ts";
import styles from './styles.module.css'

export const homePage = () => {
    return (
        <div className="w-full flex">
            <div className={`title w-full text-center h-screen ${styles.leftSide} content-center`}><p
                className={styles.authText}>{siteName}</p></div>
            <div className={`w-full text-center h-screen content-center ${styles.rightSide}`}>
                <form action="" className={`${styles.authForm} flex items-center flex-col w-full`}>
                    <div className={` ${styles.title}`}>Авторизация</div>
                    <div className={styles.authInputs}>
                    <input className={styles.authInput} type="text" aria-label="login" placeholder="Логин"/>
                    <input className={styles.authInput} type="password" aria-label="password" placeholder="Пароль"/>
                    </div>
                    <button type="submit" className={styles.authLogin}>Войти</button>
                </form>

            </div>
        </div>
    );
};

export default homePage;
