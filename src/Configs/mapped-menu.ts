import {GoCreditCard, GoDashboard} from 'react-icons/go'
import {CgCalculator} from 'react-icons/cg'
import {FiUsers} from 'react-icons/fi'
import {BsInboxes} from 'react-icons/bs'
import {IoMdCopy, IoMdExit} from 'react-icons/io'
import {ItemMenu} from 'Types'

export default [
    {
        text: 'Dashboard',
        icon: GoDashboard,
        to: '/',
    },
    {
        text: 'Pedidos',
        icon: CgCalculator,
        to: '/pedidos',
    },
    {
        text: 'Clientes',
        icon: FiUsers,
        to: '/clientes',
    },
    {
        text: 'Formas de pagamento',
        icon: GoCreditCard,
        to: '/formas-de-pagamento',
    },
    {
        text: 'Estoque',
        icon: BsInboxes,
        to: '/estoque',
    },
    {
        text: 'Carnês',
        icon: IoMdCopy,
        to: '/carnes',
    },
    {
        text: 'Sair',
        icon: IoMdExit,
    },
] as ItemMenu[]
