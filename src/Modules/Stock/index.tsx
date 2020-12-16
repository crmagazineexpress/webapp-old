import React from 'react'
import Private from 'Layouts/Private'
import {BsInboxes} from 'react-icons/bs'

export default function Stock(): JSX.Element {
    return (
        <Private icon={BsInboxes} title="Gerenciar Estoque" empty={false}>
            Gerenciar Estoque
        </Private>
    )
}
