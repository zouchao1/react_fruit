
import default_state from './defaultState'
import * as types from './actionTypes'

import connect from '../../connect'
// 给connect添加可以配置的atcionCreators
import actionCreators from './actionCreators'
connect.addActions({
    main: actionCreators
})

const reducer = (
    previous_state = default_state,
    action
) => {
    let new_state = Object.assign({}, previous_state)

    switch (action.type) {

        case types.GET_DATA + '_FULFILLED':

            new_state.list = action.payload.data.Data; break;
        case types.GET_PRODUCT + '_PENDING':
            new_state.isLoading = true; break;


        case types.GET_PRODUCT + '_FULFILLED':
            new_state.isLoading = false;
            new_state.productList = action.payload.data.Data; break;

        case types.GET_KINDS_PRODUCTS + '_FULFILLED':
            new_state.productKindsList = action.payload.data.Data; break;

        default: return previous_state;
    }
    return new_state
}

export default reducer