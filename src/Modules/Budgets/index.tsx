import React from 'react'
import Private from 'Layouts/Private'
import {CgCalculator} from 'react-icons/cg'

export default function Budgets(): JSX.Element {
    return (
        <Private icon={CgCalculator} title="Pedidos" empty={false}>
            Meus pedidos
        </Private>
    )
}
