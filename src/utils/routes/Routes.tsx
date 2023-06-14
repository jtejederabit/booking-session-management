import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../../pages/Login.tsx';
import SessionsPage from "../../pages/SessionsPage.tsx";
import CustomersPage from "../../pages/CustomersPage.tsx";
import {PrivateRoute} from "../middleware/PrivateRoutes";
import SettingsPage from "../../pages/SettingsPage";

const routes = [
    {
        path: '/',
        component: SessionsPage,
        protected: true
    },
    {
        path: '/customers',
        component: CustomersPage,
        protected: true
    },
    {
        path: '/settings',
        component: SettingsPage,
        protected: true
    },
    {
        path: '/login',
        component: Login,
        protected: false

    }
];

const RoutesProvider = () => {
    return (
        <Routes>
            {routes.map((route, index) => (
                <Route
                    key={index}
                    exact
                    path={route.path}
                    element={
                        <PrivateRoute
                            element={route.component}
                            protected={route.protected}
                        />
                    }
                />
            ))}
        </Routes>
    );
};

export default RoutesProvider;
