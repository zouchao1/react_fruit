function util_zepoto_componentWillUnmount(target) {

    let next = target.componentWillUnmount;
    if (next) {
        next(...arguments)
        target.componentWillUnmount = function () {

        }
    }

    // target.prototype.__proto__.setState({

    // })


}

export {
    util_zepoto_componentWillUnmount
}