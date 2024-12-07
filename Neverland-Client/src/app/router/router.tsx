import { HOME_ROUTE } from "../consts";
import { PubRoutes, UserRoutes } from "./routeList";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Router = () => {
    const [isUser, setIsUser] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkAuth = () => {
            const storedIsUser = Cookies.get("isUser");
            setIsUser(storedIsUser === "true");
            setIsLoading(false);
        };

        checkAuth();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <Routes>
            {isUser && UserRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} />
            ))}
            {PubRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} />
            ))}
            <Route path="*" element={<Navigate to={HOME_ROUTE} replace />} />
        </Routes>
    );
};

export default Router;
