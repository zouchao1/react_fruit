

import React, { Component } from 'react'
import { Grid } from 'antd-mobile';

class AddOnItem extends Component {


    constructor(props) {
        super(props)
        this.state = {
            data1: this.props.data1
        }

    }

    componentDidMount() {
        this.setState(prevState => {
            let newstyle = { ...prevState.data1 }
            let arrData = [];

            for (var i in newstyle) {
                if (i >= 2) {
                    arrData.push({ ...newstyle[i] })
                }
            }

            let DataPic = [];
            for (var j = 0; j < arrData.length; j++) {
                for (var index = 0; index < arrData[j].adPictures.length; index++) {
                    DataPic.push(arrData[j].adPictures[index].pictureUrl)

                }
            }

            return {
                data2: DataPic
            }
        })
    }

    render() {
        return (

            <Grid data={this.state.data2}
                columnNum={2}
                hasLine={false}
                renderItem={dataItem => {

                    return (
                        <div style={{ padding: '0' }}>
                            <img src={dataItem} style={{ width: '4.686667rem', height: ' 3.98rem' }} alt="" />
                        </div>
                    )
                }}
            />
        )
    }
}

export default AddOnItem

