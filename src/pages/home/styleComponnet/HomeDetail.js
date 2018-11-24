import React, { Component, Fragment } from 'react'


class HomeDetail extends Component {
    render() {
        return (
            <Fragment>
                {this.props.detaList.map((item) => {

                    return < HomeSingleDtail ItemList={item.commoditysComponentList[0]} key={item.commoditysComponentList[0].commodityId} />
                })}
            </Fragment>
        );
    }
}
function HomeSingleDtail(props) {

    return (
        <div className="proitem" >
            <img src={props.ItemList.pictureUrl} />
            <div className="info">
                <h5>{props.ItemList.commodityName}</h5>
                <p>
                    &nbsp;
                    </p>
                <h6> {props.ItemList.subTitle}</h6>
                <p>
                    &nbsp;
                    </p>
                <small> {props.ItemList.saleSlogan}</small>
                <p>
                    &nbsp;
                    </p>
                <span> ￥{props.ItemList.commodityPrice}/{props.ItemList.commoditySpec}</span>
            </div>
        </div>
    )

}
export default HomeDetail