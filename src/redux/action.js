import React, { useReducer, useEffect, useState } from "react";
import reducer, { initialState } from './reducer'
import { useStateValue } from './store'
import axios from 'axios'

export const incAction = (id, response) => {
    let responseCopy = JSON.parse(JSON.stringify(response))
    let singlePost = responseCopy.filter(e => e.id === id)
    alert("ID : " + singlePost.id)
    return{
        type: "INCREMENT",
        payload: singlePost
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
    // const [state, dispatch] = useReducer(reducer, initialState);
    const [state, dispatch] = useStateValue();
    const makeRequest = async () => {
        dispatch(fetching());
        try {
            const response = await axios({method:'GET', url: endpoint});  
            dispatch(success(response.data));
        } catch (e) {
            dispatch(error(e));
        }
    };

    return [state, makeRequest];
};

export const getSinglePostData = (endpoint) => {
  // const [state, dispatch] = useReducer(reducer, initialState);
  const [state, dispatch] = useStateValue();
  const makeRequest = async () => {
      dispatch(fetching());
      try {
          const response = await axios({method:'GET', url: endpoint});  
          dispatch(successSINGLE(response.data));
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

export const successSINGLE = (payload) => {
  console.log("suksesSIngle");
  console.log(payload);
  
  return {
    type: 'SUCCESSSINGLE',
    payload
  }
}

export const error = (payload) => {
  console.log("Error : " + payload);
  
  return {
    type: 'ERROR',
    payload
  }
}



