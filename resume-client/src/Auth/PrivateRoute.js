import React, {useContext} from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./Auth"

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
    const {currentUser} = useContext(AuthContext);
    console.log("AUTH: ", currentUser);
    console.log(!!currentUser);
    return (
        <Route 
            {...rest}
            render = {props =>
                !!currentUser ? (
                    <RouteComponent {...props} {...rest} />
                ) : (
                    <Redirect to={"/login"} />
                )
            }
        />
    );
}

export default PrivateRoute;