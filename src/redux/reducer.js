export const initialState = {
    status: '',
  response: []
};

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {...state, count: action.payload}
        case "DECREMENT":
            return {...state, count: action.payload}
        case "FETCHING":
            return { ...state, status: "FETCHING" };
        case "SUCCESS":
            return { ...state, status: "SUCCESS", response: action.payload };
        case "ERROR":
            return { ...state, status: "ERROR", response: action.payload };
        case "DEFAULTLIKE":
            return {...state, count: action.payload}
        default:
            return 0
    }
};

export default reducer;
