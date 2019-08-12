const defaultState = {
    count: 0
}

const myReducer = (state=defaultState, action) => {
    switch(action.type) {
        case "INCREMENT":
            return {...state, count: action.payload + 1}
        case "DECREMENT":
            return {...state, count: action.payload - 1}
        default:
            return 0
    }
}

export default myReducer