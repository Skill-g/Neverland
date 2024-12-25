import { NavLink } from 'react-router-dom';
import styles from "./styles.module.css";
import {
    ADMIN_ROUTE,
    ORG_ROUTE,
    PROFILE_ROUTE,
    siteName,
    STATISTIC_ROUTE,
    TICKET_ROUTE,
    USERS_ROUTE
} from "../../../app/consts.ts";

const username = "Дмитрий Е."
const rights = "Администратор"

export const leftMenu = () => {
    return (
        <div className={styles.leftMenuContainer}>
            <div className={styles.leftMenu}>
                <div className="mt-5 w-full">
                    <p className={styles.title}>{siteName}</p>
                </div>
                <div className={styles.buttons}>
                    <NavLink
                        to={TICKET_ROUTE}
                        end
                        className={({isActive}) =>
                            isActive ? `${styles.button} ${styles.active}` : styles.button
                        }
                    >
                        <img src="/pictures/notepad-text.svg" alt="Заявки"/>
                        <span className={styles.buttonText}>Заявки</span>
                    </NavLink>
                    <NavLink
                        to={ORG_ROUTE}
                        className={({isActive}) =>
                            isActive ? `${styles.button} ${styles.active}` : styles.button
                        }
                    >
                        <img src="/pictures/star.svg" alt="Организации"/>
                        <span className={styles.buttonText}>Организации</span>
                    </NavLink>
                    <NavLink
                        to="/students"
                        className={({isActive}) =>
                            isActive ? `${styles.button} ${styles.active}` : styles.button
                        }
                    >
                        <img src="/pictures/school.svg" alt="Студенты"/>
                        <span className={styles.buttonText}>Студенты</span>
                    </NavLink>
                    <NavLink
                        to={USERS_ROUTE}
                        className={({isActive}) =>
                            isActive ? `${styles.button} ${styles.active}` : styles.button
                        }
                    >
                        <img src="/pictures/user-search.svg" alt="Пользователи"/>
                        <span className={styles.buttonText}>Пользователи</span>
                    </NavLink>
                    <NavLink
                        to={ADMIN_ROUTE}
                        className={({isActive}) =>
                            isActive ? `${styles.button} ${styles.active}` : styles.button
                        }
                    >
                        <img src="/pictures/shield.svg" alt="Управление"/>
                        <span className={styles.buttonText}>Управление</span>
                    </NavLink>
                    <NavLink
                        to={STATISTIC_ROUTE}
                        className={({isActive}) =>
                            isActive ? `${styles.button} ${styles.active}` : styles.button
                        }
                    >
                        <img src="/pictures/chart.svg" alt="Статистика"/>
                        <span className={styles.buttonText}>Статистика</span>
                    </NavLink>
                </div>
                <div className={styles.user}>
                    <NavLink to={PROFILE_ROUTE} className={styles.profile}>
                    <div className={styles.userData}>
                        <p>{username}</p>
                        <p>{rights}</p>
                    </div>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default leftMenu;
