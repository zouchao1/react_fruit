import React, { Component, Fragment } from 'react'

import { withRouter } from 'react-router-dom'
class HomeDetail extends Component {
    constructor(props) {
        super(props)
        this.hanleDatail = this.hanleDatail.bind(this)
    }
    hanleDatail(ItemList) {
        this.props.history.push({ pathname: '/detail', search: '?commodityCode=' + ItemList.CommodityCode })
    }
    render() {


        return (
            <Fragment>
                {this.props.detaList.CommodityList ? this.props.detaList.CommodityList.map((item) => {

                    return < HomeSingleDtail ItemList={item} key={item.CommodityId} onClick={this.hanleDatail} />
                }) : this.props.detaList.map((item, i) => {

                    return < HomeSingleDtail ItemList={item.commoditysComponentList[0]} key={i} />
                })}

            </Fragment>
        );
    }
}
function HomeSingleDtail(props) {

    return (
        <div className="proitem" onClick={() => { props.onClick(props.ItemList) }}>
            <img src={props.ItemList ? (props.ItemList.pictureUrl ? props.ItemList.pictureUrl : props.ItemList.SmallPic) : ''} />
            <div className="info">
                <h5>{props.ItemList ? (props.ItemList.CommodityName ? props.ItemList.CommodityName : props.ItemList.commodityName) : ''}</h5>
                <p>
                    &nbsp;
                    </p>
                <h6> {props.ItemList ? (props.ItemList.SubTitle ? props.ItemList.SubTitle : props.ItemList.subTitle) : ''}</h6>
                <p>
                    &nbsp;
                    </p>
                <small> {props.ItemList ? (props.ItemList.PromotionTag ? props.ItemList.PromotionTag : props.ItemList.saleSlogan) : ''}</small>
                <p>
                    &nbsp;
                    </p>
                <span> ￥{props.ItemList ? (props.ItemList.OriginalPrice ? props.ItemList.OriginalPrice : props.ItemList.commodityPrice) : ''}&nbsp;&nbsp;&nbsp;&nbsp; {props.ItemList ? (props.ItemList.Spec ? props.ItemList.Spec : '/' + props.ItemList.commoditySpec) : ''}</span>
            </div>
        </div>
    )

}
export default withRouter(HomeDetail)