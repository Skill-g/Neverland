import LeftMenu from "../../../shared/leftMenu/ui/leftMenu.tsx";
import styles from './styles.module.css'
import {NavLink} from "react-router-dom";
import {ORGCREATE_ROUTE, TICKETCREATE_ROUTE, USERCREATE_ROUTE} from "../../../app/consts.ts";


export const adminPage = () => {
    return (
        <div className="container-neverland">
            <LeftMenu></LeftMenu>
            <div className={styles.buttons}>
                <NavLink className={styles.button} to={TICKETCREATE_ROUTE}>Создать заявку</NavLink>
                <NavLink className={styles.button} to={USERCREATE_ROUTE}>Создать пользователя</NavLink>
                <NavLink className={styles.button} to={ORGCREATE_ROUTE}>Создать Организацию</NavLink>
            </div>
        </div>
    );
};

