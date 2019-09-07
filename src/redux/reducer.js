export const initialState = {
    status: '',
  response: [],
  singlePost: []
};

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {...state, singlePost: action.payload}
        case "DECREMENT":
            return {...state, count: action.payload}
        case "FETCHING":
            return { ...state, status: "FETCHING" };
        case "SUCCESS":
            console.log( action.payload);
            return { ...state, status: "SUCCESS", response: action.payload };
        case "SUCCESSSINGLE":
            return { ...state, status: "SUCCESS", singlePost: action.payload };
        case "ERROR":
            return { ...state, status: "ERROR", response: action.payload };
        case "DEFAULTLIKE":
            return {...state, count: action.payload}
        default:
            return 0
    }
};

export default reducer;
