import React, { Component } from 'react'
import { BrowserRouter as Router, Route ,Link} from "react-router-dom";
import   '../assets/css/tablink.scss'

import index from '../assets/img/index.png'
import indexAc from '../assets/img/index-ac.png'
import nameImg from '../assets/img/card-holder.png'
import nameImgAc from '../assets/img/card-holder-ac.png'
import relImg from '../assets/img/release-card.png'
import relImgAc from '../assets/img/release-card-ac.png'
import searchImg from '../assets/img/search.png'
import searchImgAc from '../assets/img/search-ac.png'
import myImg from '../assets/img/mine.png'
import myImgAc from '../assets/img/mine-ac.png'

const routes =[
    {
        path: "/home",
        // component:Home,
        title:"首页",
        img:index,
        acImg:indexAc
    },{
        path: "/name-card",
        // component:nameCard,
        title:"名片夹",
        img:nameImg,
        acImg:nameImgAc
    },{
        path: "/rel-card",
        // component:relCard,
        title:"发布名片",
        img:relImg,
        acImg:relImgAc
    },{
        path: "/search",
        // component:search,
        title:"查询",
        img:searchImg,
        acImg:searchImgAc
    },{
        path: "/my",
        // component:my,
        title:"我的",
        img:myImg,
        acImg:myImgAc
    },
];
export default class tabLink extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        console.log(this.props.url)
    }
    render(){
        return (
            <div>
                {/*<div className="tab-content">*/}
                    {/*<Router>*/}
                        {/*{routes.map((route, i) => {*/}
                            {/*if(i===0){*/}
                                {/*return( <Route exact path={route.path} key={i} component={route.component} />)*/}
                            {/*}else{*/}
                                {/*return( <Route path={route.path} key={i} component={route.component} />)*/}
                            {/*}*/}
                        {/*})*/}
                        {/*}*/}
                    {/*</Router>*/}
                {/*</div>*/}
                <div className="tab-box">
                {
                routes.map((route,key) => {
                    return(<Link to={route.path} key={key}>{this.props.url==route.path?<div><img src={route.acImg} alt=""/><span className='active'> {route.title}</span></div>:<div><img src={route.img} alt=""/><span> {route.title}</span></div>}</Link>)
                    })
                }
                </div>
            </div>
        )
    }
}