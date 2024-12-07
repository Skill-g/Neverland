import styles from './styles.module.css';
import LeftMenu from "../../../shared/leftMenu/ui/leftMenu.tsx";


const ticketData = [
    { id: 1, date: '12.12.2024', title: 'Заявка №1', status: 'Ожидает', priority: 'Колледж #1' },
    { id: 2, date: '13.12.2024', title: 'Заявка №2', status: 'В обработке', priority: 'Колледж #1' },
    { id: 3, date: '14.12.2024', title: 'Заявка №3', status: 'Закрыта', priority: 'Колледж #1' },

];

export const ticketPage = () => {
    return (
        <div className="container-neverland">
            <div className={styles.container}>
                <LeftMenu />
                <div className={`w-full ${styles.containerRequests}`}>
                    <div className={styles.whiteBlock}>
                        <div className={styles.headerContainer}>
                            <p className={styles.requestCount}>Всего заявок: {ticketData.length}</p>
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
                                <th>№</th>
                                <th>Дата</th>
                                <th>Название</th>
                                <th>Статус</th>
                                <th>Организация</th>
                                <th>Действие</th>
                            </tr>
                            </thead>
                            <tbody>
                            {ticketData.map((ticket, index) => (
                                <tr key={ticket.id}>
                                    <td>{index + 1}</td>
                                    <td>{ticket.date}</td>
                                    <td>{ticket.title}</td>
                                    <td>{ticket.status}</td>
                                    <td>{ticket.priority}</td>
                                    <td><button className={styles.viewButton}>Посмотреть</button></td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ticketPage;
