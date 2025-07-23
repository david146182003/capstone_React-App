

const CartReducer = (state, action) =>{
    switch (action.type) {
        case "Add" :
            return [...state, action.payload]

        case "Delete":
            return state.filter(p => p._id !==action.payload)


        case "Increase":
            const Iindex = state.findIndex(p => p._id === action.payload)
            state[Iindex].quantity +=1;
            return [...state]

        case "Decrease":
            const Dindex =  state.findIndex(p => p._id === action.payload)
            state[Dindex].quantity -=1;
            return [...state]

        default:
            return state
    }
}

export default CartReducer