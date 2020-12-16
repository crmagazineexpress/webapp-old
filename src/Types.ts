import {ModalHandles} from 'Modules/Customers/components/MdCustomers'
import {ReactNode, RefObject} from 'react'
import {IconType} from 'react-icons/lib/esm'

export type ItemMenu = {
    text: string
    icon: IconType
    childrens?: Omit<ItemMenu, 'childrens'>[]
    to?: string
}

export type ComponentProps = {
    title: string
    icon?: IconType
    empty?: boolean
    children: ReactNode
    tools?: ReactNode
}

export type ChildNode = {
    children: ReactNode
}

export interface Customer {
    _id: string
    nome: string
    email: string
    cpf: string

    telefone: string
    celular: string

    bairro: string
    cep: string
    complemento: string
    localidade: string
    logradouro: string
    numero: string
    uf: string

    referencia: string
}

export type queryCustomer = {
    customers: Partial<Customer>[]
    md?: RefObject<ModalHandles>
}
