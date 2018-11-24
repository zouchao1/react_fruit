import React, { Component, Fragment } from 'react'
import Swiper from 'react-id-swiper';

class AllKinds extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className="SomeKinds">
                {this.props.Kinds.adPictures ? <img src={this.props.Kinds.adPictures[0].pictureUrl} /> : ''
                }

                {this.props.Kinds.adPictures && this.props.Kinds.commoditysComponentList ? <ul className="SomeKindsUl">
                    {this.props.Kinds.commoditysComponentList.map((item) => { return <DicLi key={item.commodityId} item={item} /> })}
                    <DicLi ComponentList={this.props.Kinds.commoditysComponentList} />
                </ul> : ''}

            </div>


        )
    }
}


class DicLi extends Component {
    render() {
        const params = {
            slidesPerView: 3,

        }
        return (

            <Swiper {...params} >


                {this.props.ComponentList ? this.props.ComponentList.map((item) => {
                    return <li key={item.commodityComponentId}><div><img src={item.pictureUrl} />
                        <h6>{item.commodityName}</h6>
                        <span>{item.saleSlogan}</span>
                        <small>￥{item.commodityPrice}/{item.commoditySpec}</small>
                    </div></li>
                }) : ''}
            </Swiper>

        )
    }
}

export default AllKinds