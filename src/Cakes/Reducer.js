const { buy_cake } = require("./Actioncreator")

const initialstate = {
    noofcake :10
}

const reducer = (state = initialstate,action) => {
    switch (action.type) {
        case buy_cake: return {
            ...state,
            noofcake:state.noofcake-1
        }
        default: return state
    }
}
export default reducer