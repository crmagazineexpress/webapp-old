import React from 'react'
import {Menu} from 'antd'
import MapedMenu from 'Configs/mapped-menu'
import {Link, useLocation} from 'react-router-dom'
import {CntMenu} from '../style'
// useLocation

export default function MappedMenu(): JSX.Element {
    const {pathname} = useLocation()
    const indexOpened = MapedMenu.findIndex((el) => el?.to === pathname)
    return (
        <CntMenu>
            <Menu
                theme="dark"
                defaultSelectedKeys={[String(indexOpened)]}
                mode="inline">
                {MapedMenu.map((Item, index) => {
                    return !Item.to ? (
                        <Menu.Item key={index}>
                            <div className="cnt-menu-text">
                                <Item.icon className="menu-icon" />
                                <span className="text-link">{Item.text}</span>
                            </div>
                        </Menu.Item>
                    ) : (
                        <Menu.Item key={index}>
                            <Link to={Item.to} className="cnt-menu-text">
                                <Item.icon className="menu-icon" />
                                <span className="text-link">{Item.text}</span>
                            </Link>
                        </Menu.Item>
                    )
                })}
            </Menu>
        </CntMenu>
    )
}
