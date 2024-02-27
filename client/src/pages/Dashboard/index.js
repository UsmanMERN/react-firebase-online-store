import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminLayout from "../../layouts/AdminLayout"
import DashboardHome from "./Home"
import NewUser from "./NewUser"
export default function index() {
    return (
        <>
            <main>
                <Routes>
                    <Route element={<AdminLayout />} >
                        <Route index element={<DashboardHome />} />
                        <Route path='/new-user' element={<NewUser />} />
                    </Route>
                </Routes>
            </main>
        </>
    )
}
