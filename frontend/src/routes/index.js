import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Acesso from '../pages/acesso/index'
import Relatorio from '../pages/relatorio'

const Routes = () => {

    return(
        <Switch>
            <Route path='/' component={Acesso} exact/>
            <Route path='/relatorio' component={Relatorio}/>
        </Switch>
    )
}

export default Routes;