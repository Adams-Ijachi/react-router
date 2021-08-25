import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link,  useParams,
    useRouteMatch } from "react-router-dom";
import test from './test';

function Rides() {
    let { path, url } = useRouteMatch();
    return (
        <div>

            <h1>Ride</h1>
            <Link to={`${url}/ride1`} > Ride 1 </Link>

            <Link to={`${url}/ride2`} > Ride 2 </Link>

            <Switch>
                <Route exact path={path}>
                    <h3>Please select a ride.</h3>
                </Route>
                <Route path={`${path}/:rideId`}>
                    <Topic /> 
                </Route>
                    
            </Switch>


              
        </div>
    )
}
function Topic() {
    // The <Route> that rendered this component has a
    // path of `/topics/:topicId`. The `:topicId` portion
    // of the URL indicates a placeholder that we can
    // get from `useParams()`.
    let { rideId } = useParams();
  
    return (
      <div>
        <h3>{rideId}</h3>
      </div>
    );
  }

export default Rides
