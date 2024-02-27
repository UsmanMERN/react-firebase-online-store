import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Frontend from "./Frontend"
import Auth from "./Auth"
import Dashboard from "./Dashboard"

export default function Index() {
    return (
        <>
            <Suspense fallback={<div>loading....</div>}>
                <Routes>
                    <Route path='/*' element={<Frontend />} />
                    <Route path='/dashboard/*' element={<Dashboard />} />
                    <Route path='/auth/*' element={<Auth />} />
                </Routes>
            </Suspense>
        </>
    )
}
