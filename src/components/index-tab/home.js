import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import
import TabLink from '../tabLink'

import tabIndex from './index'
import my from './my'
import nameCard from './name-card'
import relCard from './rel-card'
import search from './search'

import index from '../../assets/img/index.png'
import indexAc from '../../assets/img/index-ac.png'
import nameImg from '../../assets/img/card-holder.png'
import nameImgAc from '../../assets/img/card-holder-ac.png'
import relImg from '../../assets/img/release-card.png'
import relImgAc from '../../assets/img/release-card-ac.png'
import searchImg from '../../assets/img/search.png'
import searchImgAc from '../../assets/img/search-ac.png'
import myImg from '../../assets/img/mine.png'
import myImgAc from '../../assets/img/mine-ac.png'
const routes =[
    {
        path: "/home/index",
        component:tabIndex,
        title:"首页",
        img:index,
        acImg:indexAc
    },{
        path: "/home/name-card",
        component:nameCard,
        title:"名片夹",
        img:nameImg,
        acImg:nameImgAc
    },{
        path: "/home/rel-card",
        component:relCard,
        title:"发布名片",
        img:relImg,
        acImg:relImgAc
    },{
        path: "/home/search",
        component:search,
        title:"查询",
        img:searchImg,
        acImg:searchImgAc
    },{
        path: "/home/my",
        component:my,
        title:"我的",
        img:myImg,
        acImg:myImgAc
    },
]

export default class Home extends Component {
        constructor(props){
            super(props);
            this.state={
            }
            console.log( this.props.location.pathname)
        }

        render(){
            return(
                <div>
                    <div className="tab-content">
                        <Router className='tab-index'>
                            <TabLink url={this.props.location.pathname}></TabLink>
                            <div className='router-h'></div>
                            {/*<Switch>*/}
                            {routes.map((route, i) => {
                                console.log(i)
                                if(i===0){
                                    return( <Route exact path={route.path} key={i} component={route.component} />)
                                }else{
                                    return( <Route path={route.path} key={i} component={route.component} />)
                                }
                            })
                            }
                            {/*</Switch>*/}

                        </Router>
                    </div>
                </div>
            )
        }
}
