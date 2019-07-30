import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import auth from './auth'

//para que sea dinamico y usar el mismo para diferentes propiedades .

const ProtectedRoute = ({ component: Component, ...rest }) => {

    return (
        <Route
            {...rest}
            render={props => {
                if (auth.isAuthenticated()) {
                    return <Component {...props} />

                } else {
                    return <Redirect
                        to={{
                            pathname: '/',
                            state: {
                                from: props.location
                            }
                        }}
                    />
                }
            }}

        />
    )
}

export default ProtectedRoute