import styles from './styles.module.css';

export const ticketCreatePage = () => {
    return (
        <div className={styles.ticketContainer}>
            <h1 className={styles.ticketTitle}>Создание Тикета</h1>
            <form className={styles.ticketForm}>
                {/* Поле выбора студента */}
                <div className={styles.formGroup}>
                    <label htmlFor="student" className={styles.formLabel}>Студент</label>
                    <select id="student" className={styles.formSelect}>
                        <option value="">Выберите студента</option>
                        <option value="1">Иван Иванов</option>
                        <option value="2">Анна Смирнова</option>
                        <option value="3">Петр Петров</option>
                    </select>
                </div>

                {/* Поле выбора даты */}
                <div className={styles.formGroup}>
                    <label htmlFor="date" className={styles.formLabel}>Дата</label>
                    <input
                        type="date"
                        id="date"
                        className={styles.formInput}
                    />
                </div>

                {/* Поле для дополнительной информации */}
                <div className={styles.formGroup}>
                    <label htmlFor="additionalInfo" className={styles.formLabel}>Дополнительная информация</label>
                    <input
                        type="text"
                        id="additionalInfo"
                        placeholder="Введите дополнительную информацию"
                        className={styles.formInput}
                    />
                </div>

                {/* Кнопка создания тикета */}
                <button type="submit" className={styles.formButton}>Создать тикет</button>
            </form>
        </div>
    );
};
