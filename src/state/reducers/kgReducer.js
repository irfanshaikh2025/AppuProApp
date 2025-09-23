const initialState = {
    kg : 0,
    customerRate : 0,
    ourRate :  0
}

const kgReducer = (state=initialState, action)=>{
    switch(action.type){
        case "KG" :
            return{
                ...state,
                kg : action.payload.kg
            }
            case "CUSTOMER_RATE" :
                return{
                    ...state,
                customerRate: action.payload.customerRate
            }
            case "OUR_RATE" :
                return{
                    ...state,
                    ourRate: action.payload.ourRate
                }
            default:
                return state;
    }
}

export default kgReducer;