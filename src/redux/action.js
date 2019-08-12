export const incAction = (payload) => {
    alert('increment')
    return{
        type: "INCREMENT",
        payload
    }
}

export const decAction = (payload) => {
    alert('decrement')
    return{
        type: "DECREMENT",
        payload
    }
}