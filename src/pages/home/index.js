import React, { Component } from 'react'
import { Route, Link, NavLink, Switch, Redirect } from 'react-router-dom'
import { HomeHeader } from './styleComponnet/HomeHeader'
import uuid from 'uuid'
import './index.css'
class Home extends Component {
    constructor(props) {
        super(props)


    }
    render() {
        return (
            <div>
                <HomeHeader>
                    <span className="city">北京</span>
                    <input type="text" className="text" />
                </HomeHeader>


            </div>
        )
    }
}

export default Home