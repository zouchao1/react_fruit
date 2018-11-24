import React, { Component } from 'react'
import { Carousel, WingBlank } from 'antd-mobile';

class News extends Component {
    render() {
        return (
      
                <Carousel className="my-carousel"
                    vertical
                    dots={false}
                    dragging={false}
                    swiping={false}
                    autoplay
                    infinite
                   style={{marginLeft:'.533333rem',fontSize:'.32rem'}}
                >
                {this.props.news.map((item)=>{
                    return  <div key={item.fastReportId} className="v-item">{item.fastReportTitle}</div>
                })}
                   
                
                </Carousel>
           
        )
    }
}

export default News