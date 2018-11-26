import React, { Component, Fragment } from 'react'
import connect from '../../connect'
class Kinds extends Component {
    constructor(props) {
        super(props)
        this.handleProduct = this.handleProduct.bind(this)
        this.state = {
            isShow: false,
            flag: "进口水果"
        }
    }

    async componentDidMount() {
        await await this.props.main_actions.getKindsProduct()

    }

    handleProduct(CategoryName) {

        this.setState({

            flag: CategoryName
        })


    }
    render() {
        return (
            <Fragment >
                <ul className="kinds_list">
                    {this.props.main.productKindsList ? this.props.main.productKindsList.CategoryList.map((item) => {
                        return <li className={this.state.flag == item.CategoryName ? "productlist" : ""} key={item.CategoryId} onClick={() => { this.handleProduct(item.CategoryName) }}>{item.CategoryName}
                            {
                                this.state.flag == item.CategoryName ? <ul className="kinds_list_child">

                                    <KindsLi products={item.Childs} CategoryName={this.state.flag} />
                                </ul> : ''

                            }

                        </li>

                    }) : ''}




                </ul>


            </Fragment>
        )
    }
}

class KindsLi extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Fragment>
                {this.props.products.map((item) => {
                    return <Fragment key={item.CategoryId}>
                        <li >
                            <img src={item.PictureUrl} />
                            <span className="product_name">{item.CategoryName}</span>
                        </li>

                    </Fragment>
                })}

            </Fragment>
        )
    }


}
export default connect(Kinds, [{ name: 'main', state: ['data'] }])