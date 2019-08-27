import React, { useReducer, useEffect, useState } from "react";
import reducer, { initialState } from './reducer'
import axios from 'axios'

export const incAction = (payload) => {
    // alert('increment')
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

export const defLikeAction = (payload) => {
    // alert('decrement')
    return{
        type: "DEFAULTLIKE",
        payload
    }
}

export const getPostData = (endpoint) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const makeRequest = async () => {
        // dispatch(fetching());
        try {
            const response = await axios({method:'GET', url: endpoint});  
            dispatch(success(response.data));
        } catch (e) {
            dispatch(error(e));
        }
    };

    return [state, makeRequest];
};

export const fetching = (payload) => {
  return {
    type: 'FETCHING',
    payload
  }
}

export const success = (payload) => {
  console.log("sukses");
  console.log(payload);
  
  return {
    type: 'SUCCESS',
    payload
  }
}

export const error = (payload) => {
  console.log("Error");
  
  return {
    type: 'ERROR',
    payload
  }
}


