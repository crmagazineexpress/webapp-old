import React, {Component} from 'react'

import {Empty, Layout} from 'antd'
import {CntTitlePage, CntEmpty} from './style'
import {ComponentProps} from 'Types'
import MappedMenu from './components/MappedMenu'

// function SimpleChild({children}: {children: React.ReactNode}): JSX.Element {
//     return children as JSX.Element
// }

export default class Private extends Component<ComponentProps> {
    render(): JSX.Element {
        const {children, tools, title, icon: PageIcon, empty} = this.props
        return (
            <Layout style={{minHeight: '100vh'}}>
                <Layout.Sider
                // collapsible
                // collapsed={collapsed}
                // onCollapse={() => setCollapsed(!collapsed)}
                >
                    <Layout.Header style={{padding: 0}} />

                    <MappedMenu />
                </Layout.Sider>

                <Layout className="site-layout">
                    <Layout.Header className="bg-white" style={{padding: 0}}>
                        <CntTitlePage>
                            <div className="title">
                                {PageIcon && (
                                    <PageIcon
                                        className="mr-3"
                                        color="#245db1"
                                    />
                                )}
                                <h2>{title}</h2>
                            </div>

                            {!!tools && <div className="tools"> {tools} </div>}
                        </CntTitlePage>
                    </Layout.Header>
                    <Layout.Content
                        style={{margin: '0 16px', paddingTop: '2em'}}>
                        {empty ? (
                            <CntEmpty>
                                <Empty description={false} />
                            </CntEmpty>
                        ) : (
                            children
                        )}
                    </Layout.Content>
                </Layout>
            </Layout>
        )
    }
}
