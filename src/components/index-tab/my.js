import React, { Component } from 'react'
import TabLink from '../tabLink'
// import
export default class My extends Component {
        constructor(props){
            super(props);
            this.state={
            }
        }

        render(){
            return(
                <div>my
                    <TabLink url={this.props.location.pathname}></TabLink>
                </div>
            )
        }
}