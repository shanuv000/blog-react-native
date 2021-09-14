// import React, { createContext, useReducer, useState } from "react";
import createDataContext from "./createDataContext";
import { floor } from "react-native-reanimated";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "delete_BlogPost":
      return state.filter((blogpost) => blogpost.id !== action.payload);

    case "add_BlogPost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          title: `Blog Post #${state.length + 1}`,
        },
      ];
    default:
      return state;
  }
};
const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: "add_BlogPost" });
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_BlogPost", payload: id });
  };
};
// const BlogContext = createContext();

export const { Context, Provider } = createDataContext(
  blogReducer,
  {
    addBlogPost,
    deleteBlogPost,
  },
  []
);
