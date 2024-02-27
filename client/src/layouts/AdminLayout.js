import React from 'react'
import { Outlet } from 'react-router-dom'

export default function AdminLayout() {
    return (
        <>
            <p>Admin Header</p>
            <Outlet />
            <p>Admin Footer</p>
        </>
    )
}
