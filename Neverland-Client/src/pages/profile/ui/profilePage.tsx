import styles from './styles.module.css';
import LeftMenu from "../../../shared/leftMenu/ui/leftMenu.tsx";
const id:number = 1
const fullName:string = "Иван Иванов Иванович"
const post:string = "Администратор"
const descriptionProfile:string = "Описание пользователя"

export const profilePage = () => {
    return (
        <div className="container-neverland">
            <LeftMenu></LeftMenu>
        <div className={styles.profileContainer}>

            <div className={styles.profileCard}>
                <h2 className={styles.profileId}>ID профиля: {id}</h2>
                <img
                    src="https://via.placeholder.com/150"
                    alt="Profile Avatar"
                    className={styles.profileImage}
                />
                <h1 className={styles.profileName}>{fullName}</h1>
                <p className={styles.profilePosition}>{post}</p>
                <p className={styles.profileBio}>
                    {descriptionProfile}
                </p>
            </div>
        </div>
        </div>
    );
};
