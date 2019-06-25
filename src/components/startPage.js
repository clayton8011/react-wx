import React, { Component } from 'react'
import   '../assets/css/start.scss'
import logo from '../assets/img/start-page/start-logo.png'
import title from '../assets/img/start-page/start-title.png'
import {Redirect} from 'react-router-dom'
export default class startPage extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'',
            toHome:false,
        }
    }
    toPage=()=>{
        console.log(this)
        this.setState({
            toHome:true
        })
    }
    render(){
        if(this.state.toHome){
            return <Redirect to={{pathname:"/home"}} />
        }else{
            return (
                <div>
                    <div className="start-img" onClick={this.toPage}>
                        <div className="name-box">
                            <img className="logo" src={logo} alt=""/>
                            <img className="title" src={title} alt=""/>
                        </div>
                    </div>
                    <button onClick={this.showAl}>确定</button>
                    {/*<img src={require('../assets/img/start-page/start-bg.png')}  className='start-img' alt=""/>*/}
                </div>
            )
        }

    }

}
