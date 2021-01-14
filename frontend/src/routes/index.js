import React from 'react'
import {Switch, Route} from 'react-router-dom'
import FeriasAtivas from '../pages/feriasAtivas'
import Registro from '../pages/registro/index'
import NotFound from '../pages/notFound'
import Relatorio from '../pages/relatorio'
import Dashboard from '../pages/dashboard'


const Routes = () => {

    return(
        <Switch>
            <Route path='/' component={Dashboard} exact/>
            <Route path='/registro' component={Registro} exact/>
            <Route path='/relatorio' component={Relatorio}/>
            <Route path='/ativas' component={FeriasAtivas}/>
            <Route path='*/' component={NotFound}/>
        </Switch>
    )
}

export default Routes;