import React, {useCallback, useEffect, useRef, useState} from 'react'
import Private from 'Layouts/Private'
import {FiUsers} from 'react-icons/fi'
import api from 'Utils/api'
import {Customer} from 'Types'
import CustomersTable from './components/CustomersTable'
import {Button} from 'antd'
import MdCustomers, {ModalHandles} from './components/MdCustomers'

export default function Customers(): JSX.Element {
    const mdCustomers = useRef<ModalHandles>(null)

    const [customers, setCustomers] = useState<Customer[]>([])

    const loadCustomers = useCallback(async () => {
        const {data} = await api.get<Customer[]>('/customers')
        setCustomers(data)
    }, [setCustomers])

    useEffect(() => {
        loadCustomers()
    }, [loadCustomers])

    const AddButton: React.FC = () => {
        const openModalFx = useCallback(() => {
            mdCustomers.current?.openModal()
        }, [])

        return (
            <Button className="btn-success" onClick={openModalFx}>
                Novo Cliente
            </Button>
        )
    }

    return (
        <Private
            icon={FiUsers}
            title="Gerenciar Clientes"
            empty={customers.length === 0}
            tools={<AddButton />}>
            <MdCustomers ref={mdCustomers} updateData={() => loadCustomers()} />

            {!!customers && (
                <CustomersTable customers={customers} md={mdCustomers} />
            )}
        </Private>
    )
}
