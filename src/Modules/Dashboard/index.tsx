import React from 'react'
import Private from 'Layouts/Private'
import {GoDashboard} from 'react-icons/go'

export default function Dashboard(): JSX.Element {
    return (
        <Private icon={GoDashboard} title="Dashboard" empty={false}>
            Dashboard
        </Private>
    )
}
