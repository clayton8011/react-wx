import React, { Component } from 'react'
// import
const routes =[
    // {
    //     path: "/sandwiches",
    //     component:
    // },
    // {
    //     path: "/tacos",
    //     component: ,
    //     routes: [
    //         {
    //             path: "/tacos/bus",
    //             component:
    //         },
    //         {
    //             path: "/tacos/cart",
    //             component:
    //         }
    //     ]
    // }
]
export default class Home extends Component {
        constructor(props){
            super(props);
            this.state={
            }
        }

        render(){
            return(
                <div>
home
                    {routes.map((route, i) => (
                        {/*<RouteWithSubRoutes key={i} {...route} />*/}
                    ))}
                </div>
            )
        }
}