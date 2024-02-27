import React from 'react'
import { Outlet } from 'react-router-dom'

export default function FronendLayout() {
    return (
        <>
            <p>Header</p>
            <Outlet />
            <p>Footer</p>
        </>
    )
}
