export const cartReducer = (state,action)=>{
    console.log(action.payload.qty)
    switch(action.type){
        case "ADD_PRODUCTS":
            return {...state,products:action.payload};
        case "ADD_TO_CART":
            return {...state,cart:[...state.cart,{...action.payload,qty:1}]};    
        case "REMOVE_FROM_CART":
            return {...state,cart:state.cart.filter((c)=>c.id!=action.payload.id)};   
        case "CHANGE_QUANTITY":
            return {...state,cart:state.cart.filter((c)=>c.id==action.payload.id ?(c.qty=action.payload.qty)
                :c)}        
        default:
            
            return state;    

    }
}