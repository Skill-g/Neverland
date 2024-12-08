import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import useDebounce from "../../hooks/useDebounce.tsx";

interface Column {
    key: string;
    label: string;
}

interface TableWithSearchProps<T> {
    data: T[];
    columns: Column[];
    searchExcludeKeys?: string[];
    searchableKeys?: string[];
}

const TableWithSearch = <T extends { id: number; [key: string]: React.ReactNode | string | number }>({
                                                                                                         data,
                                                                                                         columns,
                                                                                                         searchExcludeKeys = ["id"],
                                                                                                         searchableKeys,
                                                                                                     }: TableWithSearchProps<T>) => {
    const [searchTerm, setSearchTerm] = useState("");
    const debouncedSearchTerm = useDebounce(searchTerm, 300);
    const navigate = useNavigate();

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const filteredData = useMemo(() => {
        if (!debouncedSearchTerm) return data;
        const lowerSearch = debouncedSearchTerm.toLowerCase();
        const keysToSearch = searchableKeys || Object.keys(data[0] || {}).filter(key => !searchExcludeKeys.includes(key));
        return data.filter((item) =>
            keysToSearch.some(
                (key) =>
                    String(item[key as keyof T]).toLowerCase().includes(lowerSearch)
            )
        );
    }, [debouncedSearchTerm, data, searchExcludeKeys, searchableKeys]);

    return (
        <div className={styles.whiteBlock}>
            <div className={styles.headerContainer}>
                <p className={styles.requestCount}>Всего записей: {filteredData.length}</p>
                <div className={styles.searchContainer}>
                    <input
                        type="text"
                        className={styles.searchInput}
                        placeholder="Поиск..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </div>
            </div>
            <div className={styles.tableRequests}>
                <table className={styles.ticketTable}>
                    <thead>
                    <tr>
                        <th>№</th>
                        {columns.map((column) => (
                            <th key={column.key}>{column.label}</th>
                        ))}
                        <th>Действие</th>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredData.map((item, index) => (
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            {columns.map((column) => (
                                <td key={column.key}>{item[column.key as keyof T]}</td>
                            ))}
                            <td>
                                <button
                                    className={styles.viewButton}
                                    onClick={() => navigate(`/personalstudents/${item.id}`)}
                                >
                                    Посмотреть
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TableWithSearch;
