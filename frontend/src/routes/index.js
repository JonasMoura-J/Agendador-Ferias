import React from 'react'
import {Switch, Route} from 'react-router-dom'
import FeriasAtivas from '../pages/feriasAtivas'
import Acesso from '../pages/acesso/index'
import NotFound from '../pages/notFound'
import Relatorio from '../pages/relatorio'

const Routes = () => {

    return(
        <Switch>
            <Route path='/' component={Acesso} exact/>
            <Route path='/relatorio' component={Relatorio}/>
            <Route path='/ativas' component={FeriasAtivas}/>
            <Route path='*/' component={NotFound}/>
        </Switch>
    )
}

export default Routes;