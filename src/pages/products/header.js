import React, { Component } from 'react'
import { Route, Link, NavLink, Switch, Redirect } from 'react-router-dom'
import { HeaderUl } from './styleComponnet'


class Products extends Component {
    constructor(props) {
        super(props)


    }
    render() {
        return (
            <div>
                <HeaderUl className="headerUl_products">
                    <li>
                        销量
                    </li>
                    <li>
                        新品
                    </li>
                    <li>
                        价格
                    </li>
                </HeaderUl>
            </div>
        )
    }
}

export default Products