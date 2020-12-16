import React from 'react'
import Private from 'Layouts/Private'
import {IoMdCopy} from 'react-icons/io'

export default function CreditBooklets(): JSX.Element {
    return (
        <Private icon={IoMdCopy} title="Gerenciar carnês" empty={false}>
            Gerenciar carnês
        </Private>
    )
}
