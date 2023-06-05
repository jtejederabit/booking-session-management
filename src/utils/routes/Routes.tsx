import React, { useState, useEffect} from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import AuthMiddleware from '../middleware/AuthMiddleware.tsx';
import { default as Layout } from '../../components/core/Layout.tsx';
import Login from '../../pages/Login.tsx';
import SessionsPage from "../../pages/SessionsPage.tsx";
import CustomersPage from "../../pages/CustomersPage.tsx";

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
        component: Layout,
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
                        <AuthMiddleware>
                            <route.component />
                        </AuthMiddleware>
                    }
                />
            ))}
        </Routes>
    );
};

export default RoutesProvider;
