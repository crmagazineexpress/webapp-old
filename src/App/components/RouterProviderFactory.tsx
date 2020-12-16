import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Customers from 'Modules/Customers'
import Budgets from 'Modules/Budgets'
import Dashboard from 'Modules/Dashboard'
import PaymentMethods from 'Modules/PaymentMethods'
import Stock from 'Modules/Stock'
import CreditBooklets from 'Modules/CreditBooklets'

export default function RouterProviderFactory(): JSX.Element {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Dashboard />
                </Route>
                <Route path="/pedidos">
                    <Budgets />
                </Route>
                <Route path="/clientes">
                    <Customers />
                </Route>
                <Route path="/formas-de-pagamento">
                    <PaymentMethods />
                </Route>
                <Route path="/estoque">
                    <Stock />
                </Route>
                <Route path="/carnes">
                    <CreditBooklets />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
