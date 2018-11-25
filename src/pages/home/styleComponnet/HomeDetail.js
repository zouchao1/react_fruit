import React, { Component, Fragment } from 'react'


class HomeDetail extends Component {
    render() {


        return (
            <Fragment>
                {this.props.detaList.CommodityList ? this.props.detaList.CommodityList.map((item) => {

                    return < HomeSingleDtail ItemList={item} key={item.CommodityId} />
                }) : this.props.detaList.map((item) => {

                    return < HomeSingleDtail ItemList={item.commoditysComponentList[0]} key={item.commoditysComponentList[0].commodityId} />
                })}

            </Fragment>
        );
    }
}
function HomeSingleDtail(props) {

    return (
        <div className="proitem" >
            <img src={props.ItemList.SmallPic ? props.ItemList.SmallPic : props.ItemList.pictureUrl} />
            <div className="info">
                <h5>{props.ItemList.CommodityName ? props.ItemList.CommodityName : props.ItemList.commodityName}</h5>
                <p>
                    &nbsp;
                    </p>
                <h6> {props.ItemList.SubTitle ? props.ItemList.SubTitle : props.ItemList.subTitle}</h6>
                <p>
                    &nbsp;
                    </p>
                <small> {props.ItemList.PromotionTag ? props.ItemList.PromotionTag : props.ItemList.saleSlogan}</small>
                <p>
                    &nbsp;
                    </p>
                <span> ￥{props.ItemList.OriginalPrice ? props.ItemList.OriginalPrice : props.ItemList.commodityPrice}&nbsp;&nbsp;&nbsp;&nbsp; {props.ItemList.Spec ? props.ItemList.Spec : '/' + props.ItemList.commoditySpec}</span>
            </div>
        </div>
    )

}
export default HomeDetail