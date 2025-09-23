const initialState = {
    cbm : 0,
    customerRate : 0,
    ourRate : 0
}

const cbmReducer = (state=initialState, action) =>{
    switch(action.type){
        case "CBM" :
            return {
                ...state,
                cbm : action.payload.cbm
            }
        case "CUSTOMER_RATE" :
            return{
                ...state,
                customerRate : action.payload.customerRate
                }
        case "OUR_RATE" :
            return {
                ...state,
                ourRate : action.payload.ourRate
            }
            default :
            return state;
    }
}

export default cbmReducer;