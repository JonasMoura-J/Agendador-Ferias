import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Acesso from '../pages/Acesso'

const Routes = () => {

    return(
        <Switch>
            <Route path='/' component={Acesso} exact/>
        </Switch>
    )
}

export default Routes;