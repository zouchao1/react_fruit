import React, { Component } from 'react'
import { Carousel } from 'antd-mobile';

class HomeSwaper extends Component {
    render() {
        return (

            <Carousel
                autoplay={true}
                infinite
                slideWidth={1}
                afterChange={index => this.setState({ slideIndex: index })}
            >

                {this.props.flag ? (this.props.detail ? this.props.detail.CommodityInfo.Pictures.map((val) => {

                    return <img
                        key={val}
                        src={val}
                        style={{ width: '100%', verticalAlign: 'top', height: '375px' }}
                        onLoad={() => {
                            // fire window resize event to change height
                            window.dispatchEvent(new Event('resize'));

                        }}
                    />
                }


                ) : '') : this.props.swaper[0].carouselPictures.map(val => (

                    <img
                        key={val.framesIndex}
                        src={val.pictureUrl}
                        style={{ width: '100%', verticalAlign: 'top', height: '210px' }}
                        onLoad={() => {
                            // fire window resize event to change height
                            window.dispatchEvent(new Event('resize'));

                        }}
                    />

                ))}
            </Carousel>

        );
    }
}

export default HomeSwaper