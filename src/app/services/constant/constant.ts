import { METHODS } from "node:http";

export const constant={
    API_END_POINT: 'https://freeapi.miniprojectideas.com/api/BigBasket/',
    METHODS:{
        GET_ALL_PRODUCT:'GetAllProducts',
        GET_ALL_CATEGORY : 'GetAllCategory',
        CREATE_PRODUCT : 'CreateProduct',
        UPDATE_PRODUCT : 'UpdateProduct',
        DELETE_PRODUCT : 'DeleteProductById?id=',
    }
}