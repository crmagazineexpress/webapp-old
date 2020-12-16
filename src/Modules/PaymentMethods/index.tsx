import React from 'react'
import Private from 'Layouts/Private'
import {GoCreditCard} from 'react-icons/go'

export default function PaymentMethods(): JSX.Element {
    return (
        <Private icon={GoCreditCard} title="Formas de pagamento" empty={false}>
            Formas de pagament
        </Private>
    )
}
