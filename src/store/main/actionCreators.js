
import * as types from './actionTypes'
import axios from 'axios'
export default {
    getListAsync(pagenum=0) {
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
    }
}