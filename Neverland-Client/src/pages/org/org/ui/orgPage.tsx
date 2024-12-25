import LeftMenu from "../../../../shared/leftMenu/ui/leftMenu.tsx";
import styles from "../../../ticket/ticket/ui/styles.module.css";
import TableWithSearch from "../../../../shared/tableWithSearch/ui/tableWithSearch.tsx";
import React from "react";
import {ORGPROFILEPAGE_ROUTE} from "../../../../app/consts.ts";

interface organization {
    id: number;
    organization: string;
    ColStudents: number;
    [key: string]: React.ReactNode | string | number;
}

const OrgData = [
    {id: 1, organization: 'Колледж №1', ColStudents: 10},
    {id: 2, organization: 'Колледж №2', ColStudents: 10},
    {id: 3, organization: 'Колледж №3', ColStudents: 10},
];

const organizaionColumns = [
    { key: "organization", label: "Организация" },
    { key: "ColStudents", label: "Количество студентов" }
];

export const orgPage = () => {
    return (
        <div className="container-neverland">
            <LeftMenu>
            </LeftMenu>
            <div className={`w-full ${styles.containerRequests}`}>
                <TableWithSearch<organization>
                    data={OrgData}
                    columns={organizaionColumns}
                    searchExcludeKeys={["id"]}
                    viewRoute={(id) => `${ORGPROFILEPAGE_ROUTE}`}
                    editRoute={(id) => `/orgEditPage/${id}`}
                    deleteRoute={(id) => `/orgDeletePage/${id}`}
                />
            </div>
        </div>
    );
};

export default orgPage;
