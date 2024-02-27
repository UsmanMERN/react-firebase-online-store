import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthLayout from '../../layouts/AuthLayout'
import Login from './Login'
import Logout from './Logout'
import ForgetPassword from './ForgetPassword'

export default function index() {
    return (
        <>
            <main>
                <Routes>
                    <Route element={<AuthLayout />} >
                        <Route path='/login' element={<Login />} />
                        <Route path='/logout' element={<Logout />} />
                        <Route path='/forget-password' element={<ForgetPassword />} />
                    </Route>
                </Routes>
            </main>
        </>
    )
}
