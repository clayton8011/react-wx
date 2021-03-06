// import React from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Start from '../components/startPage'
import Home from '../components/index-tab/home'
import nameCard from "../components/index-tab/name-card";
import relCard from "../components/index-tab/rel-card";
import tabIndex from "../components/index-tab";
import search from "../components/index-tab/search";
import my from "../components/index-tab/my";

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

var BasicExample=[
    {
        path:'/',
        title:'Start',
        component:Start,
        exact:true
    },
    {
        path:'/start',
        title:'Start',
        component:Start,
        exact:true
    },
    {
        path:'/home',
        title:'Home',
        component:Home,
        exact:true,
        routes:[{
            path: "/index",
            component:tabIndex,
            title:"首页",
            img:index,
            acImg:indexAc
        },{
            path: "/name-card",
            component:nameCard,
            title:"名片夹",
            img:nameImg,
            acImg:nameImgAc
        },{
            path: "/rel-card",
            component:relCard,
            title:"发布名片",
            img:relImg,
            acImg:relImgAc
        },{
            path: "/search",
            component:search,
            title:"查询",
            img:searchImg,
            acImg:searchImgAc
        },{
            path: "/my",
            component:my,
            title:"我的",
            img:myImg,
            acImg:myImgAc
        },]
    },
    // {
    //     path:'/subrouter',
    //     title:'SubRouter',
    //     component:SubRouter,
    //     exact:false,
    //     routes:[{
    //
    //     }]
    // },

]
export default BasicExample;
