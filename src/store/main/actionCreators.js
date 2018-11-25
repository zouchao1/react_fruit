
import * as types from './actionTypes'
import axios from 'axios'
export default {
    getListAsync(pagenum = 0) {
        return {
            type: types.GET_DATA,
            payload: axios({
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
                    body: { previewTime: "", operationType: 0, pageIndex: pagenum }
                },
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    'appName': '3000025'
                }
            })
        }
    },
    getProductList(keywords) {

        var fruit = ''
        if (keywords == "水果") {
            fruit = keywords
        }
        return {
            type: types.GET_PRODUCT,
            payload: axios({
                url: 'https://b2capigateway.yiguo.com/api/commodityapi/Commodity/GetSearchList',
                method: 'post',
                data: {
                    head: {
                        CityCode: "2",
                        CityId: "eabbe02f-59e0-46e6-90e7-cd8a89dbb98f",
                        DeviceId: "b3d726011880213a1e68af12c0746221",
                        DistrictId: "c1153b9b-b21e-4761-9daf-99735a87f8d8",
                        LoginToken: "",
                        MobileOS: "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1",
                        Token: "",
                    },
                    body: {
                        CategoryCode: "",
                        CategoryId: fruit ? '' : keywords,
                        Keyword: fruit ? fruit : '',
                        PageIndex: 1,
                        Sort: 4
                    }
                },
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    'appName': '3000025'
                }
            })
        }
    }


}