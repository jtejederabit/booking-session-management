import React, { useState, useEffect} from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import AuthMiddleware from '../middleware/AuthMiddleware.tsx';
import { default as Layout } from '../../components/core/Layout.tsx';
import Login from '../../pages/Login.tsx';

const routes = [
    {
        path: '/',
        component: Layout,
        protected: true
    },
    {
        path: '/customers',
        component: Layout,
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
