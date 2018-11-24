import React, { Component } from 'react'
import { Carousel } from 'antd-mobile';

class HomeSwaper extends Component {
    render() {
        return (

            <Carousel
                autoplay={true}
                infinite={true}
                slideWidth={1}
                afterChange={index => this.setState({ slideIndex: index })}
            >
                {this.props.swaper[0].carouselPictures.map(val => (

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