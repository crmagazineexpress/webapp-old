import React from 'react'
import RouterProviderFactory from './components/RouterProviderFactory'
import ThemeProviderFactory from './components/ThemeProviderFactory'

export default function App(): JSX.Element {
    return (
        <ThemeProviderFactory>
            <RouterProviderFactory />
        </ThemeProviderFactory>
    )
}
