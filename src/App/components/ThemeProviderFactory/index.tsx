import React from 'react'
import {ThemeProvider} from 'styled-components'
import {ChildNode} from 'Types'

import GlobalStyle from './style/global'
import theme from './style/theme'

export default function ThemeProviderFactory({
    children,
}: ChildNode): JSX.Element {
    return (
        <ThemeProvider theme={theme}>
            {children}
            <GlobalStyle />
        </ThemeProvider>
    )
}
