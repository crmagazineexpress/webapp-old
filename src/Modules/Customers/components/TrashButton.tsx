import {Button} from 'antd'
import React, {useCallback, useState} from 'react'
import {VscTrash} from 'react-icons/vsc'
import api from 'Utils/api'

type Prop = {
    customerId?: string
}
export default function TrashButton({customerId}: Prop): JSX.Element {
    const [loading, setLoadingState] = useState(false)

    const deleteCustomer = useCallback(async () => {
        try {
            if (!loading) {
                setLoadingState(true)
                await api.delete(`/customers/${customerId}`)
                setLoadingState(false)
            }
        } catch (error) {
            setLoadingState(false)
        }
    }, [loading, setLoadingState, customerId])

    return (
        <Button
            danger
            loading={loading}
            onClick={deleteCustomer}
            icon={<VscTrash />}
        />
    )
}
