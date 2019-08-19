const defaultState = {
    count: 0
}

const myReducer = (state=defaultState, action) => {
    switch(action.type) {
        case "INCREMENT":
            return {...state, count: action.payload}
        case "DECREMENT":
            return {...state, count: action.payload}
        case "DEFAULTLIKE":
            return {...state, count: action.payload}
        default:
            return 0
    }
}

export default myReducer