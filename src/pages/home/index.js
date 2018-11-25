import React, { Component, Fragment } from 'react'
import { Route, Link, NavLink, Switch, Redirect, withRouter } from 'react-router-dom'
import { HomeHeader } from './styleComponnet/HomeHeader'
import uuid from 'uuid'
import './index.css'
import swaperImg from '../../assets/images/fruit.gif'
import HomeSwaper from './styleComponnet/HomeSwaper'
import { Grid } from 'antd-mobile';
import connect from '../../connect'
import News from './styleComponnet/News'
import { NewsDiv } from '../../component/new.js'
import NewImg from '../../assets/images/news.png'
import AddOnItem from './styleComponnet/AddOnItem'
import BScroll from 'better-scroll'
import axios from 'axios'
import AllKinds from './styleComponnet/AllKinds'
import HomeDetail from './styleComponnet/HomeDetail'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num: 0,
            list: [],
            detailList: []
        }
        super(props)
        this.getCheckFinsh = this.getCheckFinsh.bind(this)
        this.Scoll = this.Scoll.bind(this)
    }

    Scoll(pageNum) {

        this.scroll.on(
            "pullingUp",
            async function () {
                if (pageNum <= 8) {
                    let result = await axios({
                        url: 'https://b2capigateway.yiguo.com/api/home/TemplateComponent/GetTemplateComponentInfo',
                        method: 'post',
                        data: {
                            head: {
                                cityCode: "2",
                                cityId: "eabbe02f-59e0-46e6-90e7-cd8a89dbb98f",
                                districtId: "c1153b9b-b21e-4761-9daf-99735a87f8d8",
                                loginToken: "",
                                token: "",
                                version: "h5"
                            },
                            body: { previewTime: "", operationType: 0, pageIndex: pageNum }
                        },
                        headers: {
                            'Content-Type': 'application/json;charset=UTF-8',
                            'appName': '3000025'
                        }
                    })
                    if (pageNum <= 2) {
                        this.setState(prevState => {
                            let newlist = [...prevState.list, ...result.data.Data.templateComponentList]

                            return { list: newlist }
                        })
                    } else {
                        this.setState(prevState => {
                            let newlist = [...prevState.detailList, ...result.data.Data.templateComponentList]

                            return { detailList: newlist }
                        })
                    }

                    pageNum++
                    this.scroll.finishPullUp(); // 解决拉动刷新
                    this.scroll.refresh();






                }

            }.bind(this)
        );


    }
    async componentDidMount() {
        await this.props.main_actions.getListAsync(this.state.num)
        this.scroll = new BScroll('main', {
            probeType: 2,
            pullUpLoad: {
                //配置上拉加载
                threshold: 100 // 距离底部多少距离
            },
            click: true
        })
        let pageNum = 1;

        this.Scoll(pageNum);





    }



    getCheckFinsh() {
        if (this.props.main.list) {
            return (
                <div className="scroll">
                    <HomeSwaper swaper={this.props.main.list.templateComponentList} />
                    <img src={swaperImg} />
                    <OwnGraidExample graid={this.props.main.list.templateComponentList[0].navComponentList} myClick={this.props.hanleIshow} />
                    <NewsDiv>
                        <img src={NewImg} style={{ width: '1.813333rem', height: '.346667rem', margin: ' .106667rem' }} />
                        <News news={this.props.main.list.templateComponentList[0].fastReportsList} />
                    </NewsDiv>
                    <img src='https://img10.yiguoimg.com/d/items/2018/181121/9288734342620533_1125x274.jpg?w=1125&h=274' />
                    <AddOnItem data1={this.props.main.list.templateComponentList} />

                    {this.state.list ? this.state.list.map((item) => {

                        return item.adPictures ? < AllKinds key={item.adPictures[0].adPictureId} Kinds={item} /> : ''
                    }) : ''}


                    {this.state.detailList.length > 0 ? <HomeDetail detaList={this.state.detailList} /> : ''}


                </div>
            )
        }
    }


    render() {

        return (
            <div className="box">
                <HomeHeader>
                    <span className="city">北京</span>
                    <input type="text" className="text" />
                </HomeHeader>
                <main>
                    {this.getCheckFinsh()}

                </main>

            </div>
        )
    }

}


const OwnGraidExample = props => {
    let Item = withRouter(GridExample)
    return (<Item {...props} />)
}

class GridExample extends Component {

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(hrefValue) {

        this.props.history.push({ pathname: '/product', search: '?keyWord=' + hrefValue })
        this.props.myClick();
    }
    render() {
        const data = this.props.graid.map((_val, i) => {
            return ({
                icon: _val.pictureUrl,
                text: _val.navName,
                hrefValue: _val.hrefValue
            })
        });
        return (
            <div >
                <Grid data={data} hasLine={false} className="not-square-grid" renderItem={
                    dataItem => (
                        <div onClick={() => this.handleClick(dataItem.hrefValue)}>
                            <img src={dataItem.icon} style={{ width: '48px', height: '48px' }} alt="" />
                            <div style={{ color: 'rgb(51, 51, 51)', fontSize: '12px' }}>
                                <span>{dataItem.text}</span>
                            </div>
                        </div>
                    )
                } />

            </div >
        )
    }



};


export default connect(Home, [{ name: 'main', state: ['data'] }])