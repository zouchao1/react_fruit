import React, { Component, Fragment } from 'react'
import { Route, Link, NavLink, Switch, Redirect } from 'react-router-dom'
import HomeSwaper from '../home/styleComponnet/HomeSwaper'
import { DetailDiv, DeTailBox } from "./stylecomponnet"
import urlObj from 'url'
import connect from '../../connect'
import { Toast } from 'antd-mobile';
class Detail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            commodityCode: urlObj.parse(this.props.location.search, true).query.commodityCode
        }

    }

    async componentDidMount() {
        await this.props.main_actions.getDetail(this.state.commodityCode)

    }

    isLoading() {
        if (this.props.main.Loding) {
            Toast.loading('Loading...', 1, () => {

            });


        } else {
            if (this.props.main.detail) {
                return (
                    <div>
                        <HomeSwaper detail={this.props.main.detail ? this.props.main.detail : ''} flag={true} />

                        <DetailDiv>
                            <h5>{this.props.main.detail.CommodityInfo.CommodityName}</h5>
                            <div>  <span >{this.props.main.detail.CommodityInfo.PromotionTag}</span><small>{this.props.main.detail.CommodityInfo.SubTitle}</small> </div>
                            <section>￥{this.props.main.detail.CommodityInfo.OriginalPrice} <span>{this.props.main.detail.CommodityInfo.PlaceOfOrigin}</span><span>产地:&nbsp;&nbsp;</span></section>
                            <p>{this.props.main.detail.CommodityInfo.CanNoReasonToReturnText}</p>
                            <h6> 送至:{this.props.main.detail.CommodityInfo.ShippingAddress}    </h6>
                            <h4></h4>


                            <div>
                                规格
                             <span >{this.props.main.detail.CommodityInfo.Spec}</span></div>

                        </DetailDiv>
                    </div>
                )


            }

        }
    }
    render() {

        return (
            <DeTailBox>

                {this.isLoading()}


            </DeTailBox>
        )
    }
}

export default connect(Detail, [{ name: 'main', state: ['data'] }])