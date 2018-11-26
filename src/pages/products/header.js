import React, { Component } from 'react'
import { Route, Link, NavLink, Switch, Redirect } from 'react-router-dom'
import { HeaderUl } from './styleComponnet'


class Products extends Component {
    constructor(props) {
        super(props)
        this.state = {
            header: ["销量", "新品", "价格"],
            flag: "销量"
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(item) {
        this.setState({
            flag: item
        })

    }
    render() {
        return (
            <div>
                <HeaderUl className="headerUl_products">
                    {this.state.header.map((item) => {

                        return <li key={item} className={item == this.state.flag ? "headerActive" : ""} onClick={() => { this.handleClick(item) }}>
                            {item}
                        </li>
                    })}

                </HeaderUl>
            </div>
        )
    }
}

export default Products