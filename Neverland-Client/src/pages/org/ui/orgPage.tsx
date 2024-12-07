import LeftMenu from "../../../shared/leftMenu/ui/leftMenu.tsx";
import styles from "../../ticket/ui/styles.module.css";
import TableWithSearch from "../../../shared/tableWithSearch/ui/tableWithSearch.tsx";
import React from "react";

interface organization {
    id: number;
    organization: string;
    [key: string]: React.ReactNode | string | number;
}

const OrgData = [
    {id: 1, organization: 'Колледж №1'},
    {id: 2, organization: 'Колледж №2'},
    {id: 3, organization: 'Колледж №3'}
];

const organizaionColumns = [
    { key: "organization", label: "Организация" },
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
                />
            </div>
        </div>
    );
};

export default orgPage;
