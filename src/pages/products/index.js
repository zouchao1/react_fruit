import React, { Component, Fragment } from 'react'
import { Route, Link, NavLink, Switch, Redirect } from 'react-router-dom'
import ProductsHeader from './header'
import './index.css'
import HomeDetail from '../home/styleComponnet/HomeDetail'
import urlObj from 'url'
import connect from '../../connect'
import { Toast } from 'antd-mobile';
import BScroll from 'better-scroll'

class Products extends Component {
    constructor(props) {
        super(props)

        this.state = {
            keywords: urlObj.parse(this.props.location.search, true).query.keyWord,
            detailList: []
        }
        this.isLoading = this.isLoading.bind(this)

    }
    async componentDidMount() {
        await this.props.main_actions.getProductList(this.state.keywords)
        this.scroll = new BScroll('.produc_scroll', {
            probeType: 2,
            pullUpLoad: {
                //配置上拉加载
                threshold: 100 // 距离底部多少距离
            },
            click: true
        })

    }
    render() {
        return (
            <div className="product_box">
                {this.isLoading()}
            </div>
        )
    }

    isLoading() {
        if (this.props.main.isLoading) {
            Toast.loading('Loading...', 1, () => {

            });


        } else {
            if (this.props.main.productList) {
                return (
                    <Fragment>
                        <ProductsHeader />
                        <div className="produc_scroll">
                            <div>
                                <HomeDetail detaList={this.props.main.productList} />
                            </div>
                        </div>
                    </Fragment>
                )
            }
        }
    }
}



export default connect(Products, [{ name: 'main', state: ['data'] }])