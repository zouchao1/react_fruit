import React, { Component } from 'react'
import { Route, Link, NavLink, Switch, Redirect } from 'react-router-dom'
import { KindsHeader, SetionDiv } from './styleComponnet'

import SectionKinds from './SetionKinds'
import './index.css'
import serchImg from '../../assets/images/search.png'
class Kinds extends Component {
    constructor(props) {
        super(props)


    }
    render() {
        return (
            <div className="Kind_box">

                <KindsHeader>
                    <i className="icon"></i>
                    <input type='text' placeholder="清除如商品名称" className="KindText" />
                    <span className="txt">搜索</span>
                </KindsHeader>
                <SetionDiv>
                    <SectionKinds />
                </SetionDiv>
            </div>
        )
    }
}

export default Kinds