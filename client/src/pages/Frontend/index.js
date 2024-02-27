import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FronendLayout from '../../layouts/FronendLayout'
import Home from './Home'
import UserProfile from './UserProfile'
export default function index() {
    return (
        <>
            <main>
                <Routes>
                    <Route element={<FronendLayout />}>
                        <Route index element={<Home />} />
                        <Route path='profile/:id' element={<UserProfile />} />
                    </Route>
                </Routes>
            </main>
        </>
    )
}
