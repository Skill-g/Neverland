import LeftMenu from "../../../shared/leftMenu/ui/leftMenu.tsx";
import styles from "../../ticket/ui/styles.module.css";

const UsersData = [
    { id: 1, username: 'Сотрудник №1', rights: "Администратор" },
    { id: 2, username: 'Сотрудник №2', rights: "Пользователь"},
    { id: 3, username: 'Сотрудник №3', rights: "Пользователь"}
];

export const usersPage = () => {
    return (
        <div className="container-neverland">
        <LeftMenu></LeftMenu>
            <div className={`w-full ${styles.containerRequests}`}>
                <div className={styles.whiteBlock}>
                    <div className={styles.headerContainer}>
                        <p className={styles.requestCount}>Пользователей: {UsersData.length}</p>
                        <div className={styles.searchContainer}>
                            <input
                                type="text"
                                className={styles.searchInput}
                                placeholder="Поиск..."
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.tableRequests}>
                    <table className={styles.ticketTable}>
                        <thead>
                        <tr>
                            <th>id</th>
                            <th>Имя пользователя</th>
                            <th>Права пользователя</th>
                        </tr>
                        </thead>
                        <tbody>
                        {UsersData.map((data, index) => (
                            <tr key={data.id}>
                                <td>{index + 1}</td>
                                <td>{data.username}</td>
                                <td>{data.rights}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default usersPage;
