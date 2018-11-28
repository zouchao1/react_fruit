import React, { Component } from 'react'
import { Route, Link, NavLink, Switch, Redirect, withRouter } from 'react-router-dom'
import { ACtiveOwnNavLink } from '../../component/router'
import { HomeFooter } from './styleComponnet/HomeFooter'
import Products from '../products'
import Home from './index'
import Car from '../cars'
import Kinds from '../kinds'
import Mine from '../mine'
import Detail from '../detail'
import uuid from 'uuid'
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';
import './home.css'
class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShow: true
        }
        this.hanleIshow = this.hanleIshow.bind(this)
    }

    hanleIshow() {
        this.state.isShow = false;
    }

    render() {
        return (
            <div className="home ">

                {this.state.isShow && (this.props.location.pathname !== '/product' && <HomeFooter>

                    <ACtiveOwnNavLink tag="li" to="/home"><i className="glyphicon glyphicon-home"></i>首页</ACtiveOwnNavLink>
                    {this.props.location.pathname === "/detail" ? '' : <ACtiveOwnNavLink tag="li" to="/kinds"><i className="glyphicon glyphicon-th-large"></i>分类</ACtiveOwnNavLink>}
                    <ACtiveOwnNavLink tag="li" to="/car"><i className="glyphicon glyphicon-shopping-cart"></i>购物车</ACtiveOwnNavLink>
                    {this.props.location.pathname === "/detail" ? '' : <ACtiveOwnNavLink tag="li" to="/mine"><i className="glyphicon glyphicon-user"></i>我的易桌</ACtiveOwnNavLink>}
                    {this.props.location.pathname === "/detail" ? <ButtonExample /> : ''}
                </HomeFooter>)}

                <Switch>
                    <Route path="/" exact render={() => {

                        return <Redirect to="/home" />
                    }} />
                    <Route path="/home" render={() => <Home hanleIshow={this.hanleIshow} />}></Route>
                    <Route path="/kinds" component={Kinds}></Route>
                    <Route path="/car" component={Car}></Route>
                    <Route path="/product" component={Products}></Route>
                    <Route path="/mine" component={Mine} />
                    <Route path="/detail" component={Detail}></Route>
                    <Route path="/not-found" render={() => <h1>404 page <Link to="/home">回到首页</Link> </h1>} />
                    <Redirect to="/not-found" />
                </Switch>


            </div>
        )
    }
}
const ButtonExample = () => (
    <WingBlank>


        <Button onClick={() => { console.log(1111111) }} type="warning">加入购物车</Button><WhiteSpace />
        <Button type="warning" disabled>warning disabled</Button><WhiteSpace />



    </WingBlank>
);

export default withRouter(Footer)