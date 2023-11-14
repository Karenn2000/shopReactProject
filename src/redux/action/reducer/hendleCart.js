

const cart = []
export let balance  = 10000;

const handleCart = (state=cart, action) => {
    const product = action.payload
    switch(action.type){
        case "ADD":
            const exist = state.find((x) => x.id == product.id)
            if(exist){
                return state.map((x) =>{ 
                    return x.id == product.id ? {qty: x.qty + 1} : x
                 })
            }else{
                const product = action.payload
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1,
                    }
                ]
            }
            break;

            case "REMOVE":
                return state.filter( (x) => x.id !==  action.payload.id )
                break;
            
            case "getMony":
                  balance = balance - action.payload.price 
                  const buyItem = state.filter( (x) => x.id !==  action.payload.id )
                  return[
                    ...buyItem
                 ]
                   break;
                
            default:
                return state;            
    }
}



export default handleCart;
